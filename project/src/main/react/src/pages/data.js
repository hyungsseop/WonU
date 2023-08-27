let data = [
    {
        card_id : 0,
        card_name : '삼성카드',
        domestic_fee : 10000,
        benefit_cate : '통신,포인트,카페'
    },
    {
        card_id : 1,
        card_name : '현대카드',
        domestic_fee : 15000,
        benefit_cate : '통신,포인트,통신'
    },
    {
        card_id : 2,
        card_name : '우리카드',
        domestic_fee : 20000,
        benefit_cate : '통신,주유,카페'
    },
    {
        card_id : 3,
        card_name : '신한카드',
        domestic_fee : 13000,
        benefit_cate : '교통,주유,카페'
    },
]

export default data;

//여러가지 데이터를 한 변수 안에 사용하려면 array 함수 사용
// 숫자, 문자 다 가능
// 인덱싱을 통해서 가져오면 됨

// 오브젝트 자료형
// 중괄호 열고, 여러개의 자료 보관 후, 변수를 만듬
// 차이점은 json 형태로 사용해야 한다.
// 순서를 지정하는 것이 아닌, .자리의 이름을 불러주면 된다.