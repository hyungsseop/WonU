import os
import sys
from typing import List, Optional, Union
from datetime import datetime

from pydantic import BaseModel, BaseSettings
from pydantic import Field
from pydantic import validator

from packages.handler import ModelHandler


class ProjectConfig(ModelHandler):
    def __init__(self, model_type='rco'):
        self.model_type = model_type
        self.project_path = os.path.abspath(os.getcwd())
        self.add_example_path = "example/train_model"
        self.model_path = f"{self.project_path}/models"
        self.rco_path = f"{self.model_path}/rco.pkl"
        sys.path.append(f'./{self.add_example_path}')
        ModelHandler.__init__(self)


class VariableConfig:
    def __init__(self):
        self.host_list = ['127.0.0.1', '0.0.0.0']
        self.port_list = ['8000']


class APIEnvConfig(BaseSettings):
    host: str = Field(default='0.0.0.0', env='api host')
    port: int = Field(default='8000', env='api server port')
    
    # host 점검
    @validator("host", pre=True)
    def check_host(cls, host_input):
        if host_input == 'localhost':
            host_input = "127.0.0.1"
        if host_input not in VariableConfig().host_list:
            raise ValueError("host error")
        return host_input
    
    # port 점검
    @validator("port", pre=True)
    def check_port(cls, port_input):
        if port_input not in VariableConfig().port_list:
            raise ValueError("port error")
        return port_input


class APIConfig(BaseModel):
    api_name: str = 'main:app'
    api_info: APIEnvConfig = APIEnvConfig()


class DataInput(BaseModel):
    Industry_name: str
    #gender:int = Field(ge=0, le=1)
    gender: str
    #age:int = Field(g,e=0, le=100)
    age: str
    payment:int = Field(ge=0, le=100000000)
    survey1: str
    survey2: str
    survey3: str
    survey4: str
    survey5: str
    survey6: str
    survey7: str
    survey8: str
    survey9: str
    survey10: str
    

class PredictOutput(BaseModel):
    var:str
