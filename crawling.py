# pip install selenium

#selenium 라이브러리
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

#추가 조작 라이브러리
import time
from bs4 import BeautifulSoup as bs
from time import sleep

#기타 라이브러리
import pandas as pd

ser = Service(r"C:\Users\JH\anaconda3\chromedriver.exe")

# Chrome 옵션 설정
op = webdriver.ChromeOptions()
# op.add_argument('--headless')
# op.add_argument('--no-sandbox')
# op.add_argument('--disable-dev-shm-usage')
# 리눅스 서버와 같이 GUI를 제공하지 않는 환경에서는 '--no-sandbox, --disable-gpu' 옵션도 추가해야함.

driver = webdriver.Chrome(service = ser, options = op)

start_date = time.strptime("2023/7/13","%Y/%m/%d")
end_date = time.strptime("2023/8/23","%Y/%m/%d")

#수집한 정보를 저장하는 리스트
c_gall_no_list = []
title_list = [] #제목
contents_list = [] #게시글 내용
contents_date_list = []

#수집한 정보를 저장하는 리스트
gall_no_list = [] #글 번호
# reply_id = [] #답글 아이디
reply_content = [] #답글 내용
# reply_date = [] #답글 등록 일자

#기본 URL
BASE = "http://gall.dcinside.com"

start_page = 1 # 너무 앞에서 부터 돌아서 사이트 보고 날짜에 맞춰서 조정
                # start_date를 최근걸로 하려면 start_page = 1000으로 지정
Flag = True

while Flag: #게시글의 페이지마다 loop를 수행(for i in range(100000000) 을 써도 무방)
    
    #게시글 목록 페이지
    base_url = BASE + '/board/lists/?id=creditcard&s_type=search_subject_memo&s_keyword=.EC.B6.94.EC.B2.9C&page='+str(start_page)
    # base_url = BASE + f'/board/lists/?id=creditcard&page={str(start_page)}&search_pos=&s_type=search_subject_memo&s_keyword=.EC.B6.94.EC.B2.9C'
    
    try:
        driver.get(base_url)
        sleep(1)
    except : #예외 발생 시 다시 load
        continue
    #게시글 목록의 HTML source를 읽어옴
    page_source = driver.page_source
    soup = bs(page_source, "html.parser")
    
    #모든 게시글의 정보를 찾음
    article_list = soup.find('tbody').find_all('tr')
    #수집하는 기간에 맞는 게시글이 목록에 있는지 체크
    date = article_list[-1].find("td",{"class" : "gall_date"}).text
    contents_date = time.strptime('23.'+date,"%y.%m.%d")

    for article in article_list:
        print(article)
        #게시글의 제목을 가져오는 부분
        title = article.find('a').text

        #게시글의 종류(ex-일반/설문/투표/공지/등등...)
        head = article.find('td',{"class": "gall_num"}).text
        if head not in ['설문','AD','공지','이슈']: #사용자들이 쓴 글이 목적이므로 광고/설문/공지 제외, 이슈는 신용카드와 관련없어 제외
                
            #게시글 번호 찾아오기
            gall_id = article.find("td",{"class" : "gall_num"}).text
            
            if gall_id in c_gall_no_list:
                continue
            
            #각 게시글의 주소를 찾기 -> 내용 + 댓글 수집 목적
            tag = article.find('a',href = True)
            content_url = BASE + tag['href']
            
            #게시글 load
            try:
                driver.get(content_url)
                sleep(1)
                contents_soup = bs(driver.page_source,"html.parser")
                #게시글에 아무런 내용이 없는 경우 -> 에러뜸 (빈 문자열로 처리하고 댓글만 가져와도 됩니다.)
                contents = contents_soup.find('div', {"class": "write_div"}).text
            except : 
                continue
                
            #게시글의 작성 날짜
            c_date = article.find("td",{"class" : "gall_date"}).text
            
            #게시글 제목과 내용을 수집
            c_gall_no_list.append(gall_id)
            title_list.append(title)
            contents_list.append(contents)
            contents_date_list.append(c_date)
            
            #댓글의 갯수를 파악
            reply_no = contents_soup.find_all("li",{"class" : "ub-content"})
            if len(reply_no) > 0 :
                for r in reply_no:
                    try:
                        # user_name = r.find("em").text #답글 아이디 추출
                        # user_reply_date = r.find("span",{"class" : "date_time"}).text #답글 등록 날짜 추출
                        user_reply = r.find("p",{"class" : "usertxt ub-word"}).text #답글 내용 추출
                        
                        #댓글의 내용을 저장
                        gall_no_list.append(gall_id)
                        # reply_id.append(user_name)
                        # reply_date.append(user_reply_date)
                        reply_content.append(user_reply)    

                    except: #댓글에 디시콘만 올려놓은 경우
                        continue
            else:
                pass

    #다음 게시글 목록 페이지로 넘어가기
    if start_date < contents_date: #게시글의 마지막 날짜가 수집기간 날짜에 포함되는가?
        start_page += 1
        continue
        
    elif contents_date < end_date: #수집기간보다 오래된 날짜면 수집을 완료함
        print("수집을 종료합니다.")
        #수집한 데이터를 저장

        contents_df = pd.DataFrame({"id" : c_gall_no_list,
                                    "title" : title_list,
                                    "contents" : contents_list,
                                    "date" : contents_date_list
                                })
        # print(contents_df)

        reply_df = pd.DataFrame({"id" : gall_no_list,
                                # "reply_id" : reply_id,
                                "reply_content" : reply_content,
                                # "reply_date" : reply_date
                                })
        # print(contents_df)

        contents_df = contents_df[contents_df["date"].between('07.13', '08.23')]
        # print(contents_df)


        contents_df.to_csv("contents.csv",encoding ='utf8',index = False)
        reply_df.to_csv("reply.csv",encoding = 'utf8',index = False)
        Flag = False
        continue

