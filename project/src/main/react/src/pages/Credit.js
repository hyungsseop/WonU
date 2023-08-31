import React, { useEffect, useState } from 'react';
import { ToggleButtonGroup, ToggleButton, handleClose} from 'react-bootstrap';
import card_info from './data.js';
import axios from 'axios';
import './css/Credit.css';
import Detail from './Detail.js';

function Credit() {

  let [card] = useState(card_info);
  const [filteredCards, setFilteredCards] = useState(card); // 필터링된 카드 목록을 관리
  const [selectedCardCompanys, setselectedCardCompanys] = useState([]);
  const [selectedBenefits, setselectedBenefits] = useState([]);

  const sendToggleValues = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/credit', {
        selectedCardCompanys,
        selectedBenefits
      });
      console.log(response.data);
    } catch (error) {
      console.error('선택된 값을 서버로 전송하는데 실패:', error);
    }
  }

  const handleCardCompanyToggle = (value) => {
    setselectedCardCompanys(value);
    sendToggleValues();
  }

  const handleBenefitToggle = (value) => {
    setselectedBenefits(value);
    sendToggleValues();
  }

  useEffect(() => {
    // 카드사와 혜택에 따라 카드 정보를 필터링
    const newFilteredCards = card.filter((c) => {
      return (selectedCardCompanys.length === 0 || selectedCardCompanys.includes(c.companyId)) &&
             (selectedBenefits.length === 0 || selectedBenefits.includes(c.benefitId));
    });

    setFilteredCards(newFilteredCards);
  }, [selectedCardCompanys, selectedBenefits]);

  return (
    <div>
      <div className="container">
        <br></br>
        <>
          <p>카드사</p>
          <ToggleButtonGroup type="checkbox" defaultValue={[0]} className="mb-2" onChange={handleCardCompanyToggle}>
            <ToggleButton className="toggle-btn" id="tbg-check-0" value={0} active={selectedCardCompanys.includes(0)}>
              전체
            </ToggleButton>
            <ToggleButton className="toggle-btn" id="tbg-check-1" value={1} active={selectedCardCompanys.includes(1)}>
              우리카드
            </ToggleButton>
            <ToggleButton className="toggle-btn" id="tbg-check-2" value={2} active={selectedCardCompanys.includes(2)}>
              KB국민카드
            </ToggleButton>
            <ToggleButton className="toggle-btn" id="tbg-check-3" value={3} active={selectedCardCompanys.includes(3)}>
              신한카드
            </ToggleButton>
            <ToggleButton className="toggle-btn" id="tbg-check-4" value={4} active={selectedCardCompanys.includes(4)}>
              현대카드
            </ToggleButton>
            <ToggleButton className="toggle-btn" id="tbg-check-5" value={5} active={selectedCardCompanys.includes(5)}>
              삼성카드
            </ToggleButton>
            <ToggleButton className="toggle-btn" id="tbg-check-6" value={6} active={selectedCardCompanys.includes(6)}>
              롯데카드
            </ToggleButton>
          </ToggleButtonGroup>
          <br />
          <p>혜택</p>
          <ToggleButtonGroup type="checkbox" defaultValue={[0]} className="mb-2" onChange={handleBenefitToggle}>
          <ToggleButton className="toggle-btn1" id="tbg-radio-0" value={0} active={selectedBenefits.includes(0)}>
              전체
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-1" value={1} active={selectedBenefits.includes(1)}>
              Radio 1
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-2" value={2} active={selectedBenefits.includes(2)}>
              Radio 2
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-3" value={3} active={selectedBenefits.includes(3)}>
              Radio 3
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-4" value={4} active={selectedBenefits.includes(4)}>
              Radio 4
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-5" value={5} active={selectedBenefits.includes(5)}>
              Radio 5
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-6" value={6} active={selectedBenefits.includes(6)}>
              Radio 6
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-7" value={7} active={selectedBenefits.includes(7)}>
              Radio 7
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-8" value={8} active={selectedBenefits.includes(8)}>
              Radio 8
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-9" value={9} active={selectedBenefits.includes(9)}>
              Radio 9
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-10" value={10} active={selectedBenefits.includes(10)}>
              Radio 10
            </ToggleButton>
            <ToggleButton className="toggle-btn1" id="tbg-radio-11" value={11} active={selectedBenefits.includes(11)}>
              Radio 11
            </ToggleButton>

          </ToggleButtonGroup>
        </>

        <div className="row">
        {
          filteredCards.map((a, i) => {
            return (
              <Card_list card={filteredCards[i]} i={i}></Card_list>
            )
          })
        }
       </div>
      </div>
    </div>
  );
}

function Card_list(props) {
  return (
      <div className="col-md-3">
        <div className='card_list'>
        {/* <img src={'./images/samsung'+ (props.i+1) +'.png'} width="80%" /> */}
        <img src={props.card.card_image} height="250px" width="158px"/>
        <h4>{props.card.card_name}</h4>
        <a>연회비: {props.card.domestic_fee}</a>
        <p>혜택: {props.card.benefit_cate}</p>
        {/* <button className='btn btn-primary'>상세 보기</button> */}
        <Detail></Detail>
        </div> 
      </div>
  )
}
export default Credit;