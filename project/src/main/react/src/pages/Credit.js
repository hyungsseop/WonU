import React, { useEffect, useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import axios from 'axios';
import './css/Credit.css';
import Detail from './Detail.js';
import CardList from './CardList';

function Credit() {
  useEffect(() => {
    axios.get('http://localhost:8080/cardInfo')
      .then(response => {
        setCardInfo(response.data);
      })
      .catch(error => {
        console.error('API 호출 중 에러 발생: ', error);
      });
  }, []);

  const [cardInfo, setCardInfo] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedCardCompanys, setselectedCardCompanys] = useState(['전체']);
  const [selectedBenefits, setselectedBenefits] = useState(['전체']);

  const handleCardCompanyToggle = (selected1) => {
    console.log("handleCardCompanyToggle selected:", selected1);
    setselectedCardCompanys(selected1);
  };

  const handleBenefitToggle = (selected2) => {
    console.log("handleBenefitToggle selected:", selected2);
    setselectedBenefits(selected2);
  };

  useEffect(() => {
    const newFilteredCards = cardInfo.filter((card) => {
      return (
        (selectedCardCompanys.includes('전체') || selectedCardCompanys.includes(card.cardCorp)) &&
        (selectedBenefits.includes('전체') || selectedBenefits.some(benefit => card.benefitMate.includes(benefit)))
      );
    });
  
    setFilteredCards(newFilteredCards);
  }, [selectedCardCompanys, selectedBenefits, cardInfo]);

  const cardCompanyItems = ['전체', '우리', '신한', 'KB국민', '현대', '롯데', '삼성'];
  const benefitItems = ['전체', '외식', '대형마트', '카페', '편의점', '주유', '의료', '자동차정비', '숙박', '레저', '놀이공원', '소핑', '학원', '관람', '할인점', '자동차판매', '여행', '렌터카', '해외', '보험', '교통'];

  return (
    <div className="container">
      <h2 className="credit1">신용카드</h2>
      <p>카드사</p>
      <ToggleButtons items={cardCompanyItems} selectedItems={selectedCardCompanys} handleToggle={handleCardCompanyToggle} startIndex={0} />
      <br />
      <p>혜택</p>
      <ToggleButtons items={benefitItems} selectedItems={selectedBenefits} handleToggle={handleBenefitToggle} startIndex={10} />
      <br/><br/><br/><br/>
      <div className="row">
        {filteredCards.map((card, i) => (
          <CardList card={card} key={i} />
        ))}
      </div>
    </div>
  );
}

function ToggleButtons({ items, selectedItems, handleToggle, startIndex = 0 }) {
  return (
    <ToggleButtonGroup type="checkbox" value={selectedItems} className="mb-2" onChange={handleToggle}>
      {items.map((item, index) => (
        <ToggleButton
          className={`toggle-btn${index === 0 ? '' : '1'}`}
          id={`tbg-${index === 0 ? 'check' : 'radio'}-${startIndex + index}`}
          value={item}
          active={selectedItems.includes(item)}
          key={index}
        >
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default Credit;
