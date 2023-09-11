from fastapi import APIRouter
import torch
import os

from packages.config import DataInput, PredictOutput
from packages.config import ProjectConfig

from collections import defaultdict
from sklearn.preprocessing import LabelEncoder
import pandas as pd
import joblib
import warnings
warnings.filterwarnings('ignore')


class MultiColLabelEncoder:
    def __init__(self):
        self.encoder_dict = defaultdict(LabelEncoder)

    def fit_transform(self, X: pd.DataFrame, columns: list):
        if not isinstance(columns, list):
            columns = [columns]

        output = X.copy()
        output[columns] = X[columns].apply(lambda x: self.encoder_dict[x.name].fit_transform(x))

        return output
    
class ScorePredictor(MultiColLabelEncoder):
    def __init__(self, df):
        #super().__init__(df)
        #data = self.make_noun_score(self.df)
        #data = self.total_transform(self, df)
        self.df = df
        # model 1 features
        self.model_data = self.df[['소분류업종명', '성별', '나이대', '결제금액','survey1', 'survey2', 'survey3', 'survey4', 'survey5','survey6', 'survey7', 'survey8', 'survey9', 'survey10']]
        
        mcle = MultiColLabelEncoder()
        self.model_data = mcle.fit_transform(self.model_data, columns=['성별', '소분류업종명', '나이대'])


    def model1_predictor(self):
        # data = pd.get_dummies(self.model1_data)
        model1 = joblib.load(os.path.abspath(os.getcwd()) + '/models/rco.pkl')
        # for name in model1.feature_names_:
        #     if name not in data.columns: data[name] = 0
        model1_card_result = model1.predict(self.model_data)[0]
        return model1_card_result

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
    Industry_name = data_request.Industry_name
    gender = data_request.gender
    age = data_request.age
    payment = data_request.payment
    survey1 = data_request.survey1
    survey2 = data_request.survey2
    survey3 = data_request.survey3
    survey4 = data_request.survey4
    survey5 = data_request.survey5
    survey6 = data_request.survey6
    survey7 = data_request.survey7
    survey8 = data_request.survey8
    survey9 = data_request.survey9
    survey10 = data_request.survey10

    df = pd.DataFrame([[Industry_name, gender, age, payment, survey1, survey2, survey3, survey4, survey5, survey6, survey7, survey8, survey9, survey10]]
                      ,columns=['소분류업종명', '성별', '나이대', '결제금액','survey1', 'survey2', 'survey3', 'survey4', 'survey5','survey6', 'survey7', 'survey8', 'survey9', 'survey10'])
    

    scorePre = ScorePredictor(df)
    var = scorePre.model1_predictor() 
    return {'var' : str(var)}