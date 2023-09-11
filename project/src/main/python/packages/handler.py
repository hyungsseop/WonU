import torch

class ModelHandler:
    def load_model(self):
        if self.model_type == 'rco':
            model = torch.load(f'{self.rco_path}')

        

class DataHandler:
    def check_type(self, check_class, data):
        data = check_class(**data)
        
        return data