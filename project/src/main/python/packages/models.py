from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from datetime import datetime
from .database import Base


class Survey_db(Base):
    __tablename__ = "survey_db"

    survey_db_no = Column(Integer, primary_key=True, index=True)
    user_id = Column(String(20))
    card_own_yn = Column(Integer)
    card_purpose = Column(Integer)
    prefer_benefit = Column(Integer)
    most_benefit = Column(Integer)
    airport_mileage = Column(Integer)
    prefer_design = Column(Integer)
    card_year_fee = Column(Integer)
    last_month_expense = Column(Integer)
    this_month_expense = Column(Integer)
    survey_date = Column(datatime.date)
    survey_satisfy = Column(Integer)
    survey_satisfy_detail = Column(Integer)
    survey_recomm_card = Column(String(70))
