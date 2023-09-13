from fastapi import APIRouter
import torch
import os

from packages.config import DataInput, PredictOutput
from packages.config import ProjectConfig
from packages.rco_sub import rco_sub

from collections import defaultdict
from packages.MultiColLabelEncoder import MultiColLabelEncoder
from collections import Counter 
import pandas as pd
import joblib
import warnings
warnings.filterwarnings('ignore')

card_cosine = pd.read_csv('packages/card_co_new_0911.csv')
card_cosine = card_cosine.set_index(['카드명'])

def card(c) :
    card_dict = {
        0:'삼성_iD_달달할인_카드',
        1:'신한카드_Deep_Oil',
        2: '삼성_iD_달달할인_카드',
        3:'카드의정석_댕댕냥이',
        4:'다둥이행복카드',
        5:'KB국민_청춘대로_톡톡카드',
        6:'카드의정석L.POINT',
        7:'KB국민_WE:SH_All_카드',
        8:'롯데_국민행복카드',
        9:'현대카드Z_work',
        10:'현대카드Z_family',
        11:'삼성카드_taptap_O',
        12:'카드의정석_UniMile',
        13:'우리_국민행복카드_S2',
        14:'KB국민_굿데이카드',
        15:'카드의정석SHOPPING',
        16:'신한카드_Mr.Life',
        17:'LOCA_LIKIT',
        18:'알뜰교통_우리카드',
        19:'LOCA_CLASSIC_(로카_클래식)',
        20:'알뜰교통_신한카드',
        21:'국민행복_삼성카드_V2',
        22:'KB국민_알뜰교통플러스카드',
        23:'우리카드_WON_POINT_AIR',
        24:'삼성_iD_EV_카드',
        25:'NU_Uniq',
        26:'현대카드ZERO_Edition2(할인형)',
        27:'삼성_iD_ON_카드',
        28:'LOCA_365',
        29:'현대카드X_BOOST'}
    return card_dict.get(c)
    
class ScorePredictor(MultiColLabelEncoder):
    def __init__(self, df):
        #super().__init__(df)
        self.df = df
        # model 1 features
        self.model_data = self.df[['소분류업종명', '성별', '나이대', '결제금액','survey1', 'survey2', 'survey3', 'survey4', 'survey5','survey6', 'survey7', 'survey8', 'survey9']]
        #self.model_data = self.df

        mcle = MultiColLabelEncoder()
        self.model_data = mcle.fit_transform(self.model_data, columns=['성별', '소분류업종명', '나이대'])


    def model1_predictor(self):
        # 모델 불러오기 
        model1 = joblib.load('models/rco.pkl')
        # for name in model1.feature_names_:
        #     if name not in data.columns: data[name] = 0
        #model1_card_result = model1.predict(self.model_data)[0]
        model1_card_result = model1.predict(self.model_data)
        return model1_card_result

def get_item_based_collabor(card):
  return card_cosine[card].sort_values(ascending=False)[:10]

# Project config 설정
project_config = ProjectConfig('rco')
# 모델 가져오기
# model = project_config.load_model()
# model.eval()

rco = APIRouter(prefix='/rco')

# router 마다 경로 설정
@rco.get('/', tags=['rco'])
async def start_rco():
    return {'msg' : 'Here is RCO'}

@rco.post('/predict', tags=['rco'], response_model=PredictOutput)
async def rco_predict(data_request: DataInput):
    date = data_request.localDate
    userId = data_request.userId
    gender = data_request.gender
    age = data_request.age
    survey1 = data_request.survey1
    survey2 = data_request.survey2
    survey3 = data_request.survey3
    survey4 = data_request.survey4
    survey5 = data_request.survey5
    survey6 = data_request.survey6
    survey7 = data_request.survey7
    survey8 = data_request.survey8
    survey9 = data_request.survey9

    df = pd.read_csv('packages/pay_testdata.csv')
    df = df[(df['user_id']==userId)]#&(df['payment_date'].str.contains(date[:7]))]
    df = df[['소분류업종명', '결제금액']]
    df['성별']=gender
    df['나이대']=age
    df['survey1']=survey1
    df['survey2']=survey2
    df['survey3']=survey3
    df['survey4']=survey4
    df['survey5']=survey5
    df['survey6']=survey6
    df['survey7']=survey7
    df['survey8']=survey8
    df['survey9']=survey9


    scorePre = ScorePredictor(df)
    var = scorePre.model1_predictor()
    #print(var)

    count_var = Counter(var)
    max_card=count_var.most_common(n=1)
    #print(max_card[0][0])
    var=max_card[0][0]
    card_name = card(var)
    #print(card_name)
    result = list(get_item_based_collabor(card_name).keys())
    #print(result)

    result_dcit = {}
    for i in range(len(result)):
        result_dcit[i] = result[i]
    
    results = rco_sub(df, result_dcit)

    print(results)

    return {"card" : results}
