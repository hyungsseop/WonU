import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './css/Modal2.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// function generateRandomId() {
//   const length = 10;
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     result += characters.charAt(randomIndex);
//   }
//   return result;
// }

function Modal2() {
  const navigate = useNavigate();
  const [card_own_yn, setCard_own_yn] = useState('');
  const [card_purpose, setCard_purpose] = useState('');
  const [prefer_benefit, setPrefer_benefit] = useState('');
  const [most_benefit, setMost_benefit] = useState('');
  const [airport_mileage, setAirport_mileage] = useState('');
  const [prefer_design, setPrefer_design] = useState('');
  const [card_year_fee, setCard_year_fee] = useState('');
  const [last_monthly_expense, setLast_monthly_expense] = useState('');
  const [this_monthly_expense, setThis_monthly_expense] = useState('');
  const [step, setStep] = useState(1);

  // 신용카드 미보유 이전버튼
  const handlePrevClick = () => {
    if (step === 6) {
      setStep(1);
    } else {
      setStep(prevStep => prevStep - 1);
    }
  };  

  

  // 신용카드 미보유 2번 목적 다음버튼
  const handleNextClick1 = () => {
    if (!card_purpose) { 
      window.alert("추천서비스 이용을 위해 질문에 응답해주세요.");
  } else {
      setStep(step + 1);
  }
};


  // 신용카드 미보유 3번 혜택 다음버튼
  const handleNextClick2 = () => {
    if (!prefer_benefit) { 
      window.alert("추천서비스 이용을 위해 질문에 응답해주세요.");
  } else {
      setStep(step + 1);
  }
};

// 신용카드 미보유 4번 다음버튼
const handleNextClick = () => {
  if (step === 4) {
    // 선택된 항목 확인
    let selectedValue;
    switch (prefer_benefit) {
      case '1':
        selectedValue = most_benefit;
        break;
      case '2':
        selectedValue = airport_mileage;
        break;
      case '3':
        selectedValue = prefer_design;
        break;
      case '4':
        selectedValue = card_year_fee;
        break;
      case '5':
        selectedValue = last_monthly_expense;
        break;
      default:
        selectedValue = '';
        break;
    }

    // 선택되지 않은 경우 경고 메시지 출력
    if (!selectedValue) {
      alert("추천서비스 이용을 위해 질문에 응답해주세요.");
      return;
    }
  }

  // 다음 단계로 이동
  setStep(step + 1);
};

  const handleFirstClick = () => {
    if (card_own_yn === '1') {
      setStep(6);
    } else if (card_own_yn === '2') {
      setStep(2);
    } else if (!card_own_yn) {
      alert("추천서비스 이용을 위해 질문에 응답해주세요.");
    } 
  };
  
  const [responseData, setResponseData] = useState(null);


  const dataToSend = {
    userId: localStorage.getItem('login-id'),
    cardOwnYn: parseInt(card_own_yn),
    cardPurpose: parseInt(card_purpose),
    preferBenefit: parseInt(prefer_benefit),
    mostBenefit: parseInt(most_benefit),
    airportMileage: parseInt(airport_mileage),
    preferDesign: parseInt(prefer_design),
    cardYearFee: parseInt(card_year_fee),
    lastMonthExpense: parseInt(last_monthly_expense),
    thisMonthExpense: parseInt(this_monthly_expense),
    //submissionId: generateRandomId(),
  };

  localStorage.setItem('submissionId', dataToSend.submissionId);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkenBackground, setDarkenBackground] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!this_monthly_expense || this_monthly_expense === '') {
      alert('추천서비스 이용을 위해 질문에 응답해주세요.');
      return;
    }

    console.log("Form Submitted");
    setLoading(true);
    setDarkenBackground(true);

    try {
      const response = await axios.post(
          "http://localhost:8080/survey/regist", 
          dataToSend,
          {
              headers: {
                  "Content-Type": "application/json",
              }
          }
      );
      await new Promise(res => setTimeout(res, 4000));

      const responseBody = JSON.parse(response.data.body);
      setResponseData(responseBody.card); 
    
    if (response.data.statusCodeValue === 200) { // 응답 상태 코드가 200인 경우
        console.log("Data sent successfully", responseBody);
        localStorage.setItem('cardData', JSON.stringify(responseBody.card));
        console.log("Data to Send:", dataToSend);
    } else {
        console.error("Error sending data", responseBody.message);
    }
} catch (error) {
    console.error("There was an error sending the data", error);
} 

  

    setLoading(false);
    navigate("/credit/recommend");
    setShow(false);
    setDarkenBackground(false);
  };

  return (
    <>
      <Button variant="primary" className='custom3-button' onClick={() => setShow(true)}>
        회원 추천 받기
      </Button>
      <div className={`modal-overlay ${darkenBackground ? 'darken' : ''}`}>
        <div className='totalmodal'>
      <Modal show={show} onHide={() => setShow(false)} className="modal2_1" aria-labelledby="example-custom-modal-styling-title" centered={true}>
      <Modal.Header closeButton>
        <br/>
        <div className="modalfont1">
          필요한 정보를 입력하세요
          </div>
      </Modal.Header>
        <br/>
        <Modal.Body style={{ overflowY: 'auto', maxHeight: '700px', maxWidth:'1200px'}}>
          <p className='modalfont2'>
          필요한 정보를 입력하여 적합한 신용 카드와 카드 분석 보고서를 받으세요.
          </p>
          <hr></hr>
          <Form onSubmit={handleSubmit}>
          
          {step === 1 && (
            <Form.Group className='modalfont3'>
              <Form.Label className='modalfont4'>1. 현재 신용카드를 가지고 계신가요?</Form.Label>
              <Form.Check
                type="radio"
                label="예"
                name="card_own_yn"
                value="1"
                checked={card_own_yn === '1'}
                onChange={(e) => {setCard_own_yn(e.target.value);}}
              />
              <Form.Check
                type="radio"
                label="아니오"
                name="card_own_yn"
                value="2"
                checked={card_own_yn === '2'}
                onChange={(e) => {setCard_own_yn(e.target.value);}}
              />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handleFirstClick}>다음</Button>
              </div>
            </Form.Group>
          )}

          
          { card_own_yn === "2" && step === 2 && ( 
          <Form.Group className='modalfont3'>
            <Form.Label>2. 신용카드를 만드는 목적은 무엇입니까?</Form.Label>
            <Form.Check 
              type="radio" 
              label="혜택을 받기 위해" 
              name="card_purpose" 
              value="1"
              checked={card_purpose === '1'}
              onChange={(e) => setCard_purpose(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="할부 사용" 
              name="card_purpose" 
              checked={card_purpose === '2'}
              value="2"
              onChange={(e) => setCard_purpose(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="소득 공제" 
              name="card_purpose" 
              checked={card_purpose === '3'}
              value="3"
              onChange={(e) => setCard_purpose(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="기타" 
              name="card_purpose"
              checked={card_purpose === '4'} 
              value="4"
              onChange={(e) => setCard_purpose(e.target.value)}
            />
            <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick1}>다음</Button>
              </div>
          </Form.Group>
          )}
          
            {step === 3 && (
          <Form.Group className='modalfont3'>
            <Form.Label>3. 신용카드 선택 시, 어떤 점을 가장 중요시하나요?</Form.Label>
            <Form.Check 
              type="radio" 
              label="혜택(할인/적립)" 
              name="prefer_benefit" 
              checked={prefer_benefit === '1'}
              value="1"
              onChange={(e) => {setPrefer_benefit(e.target.value); setStep(3);}}
            />
            <Form.Check 
              type="radio" 
              label="항공마일리지" 
              name="prefer_benefit" 
              checked={prefer_benefit === '2'}
              value="2"
              onChange={(e) => {setPrefer_benefit(e.target.value); setStep(3);}}
            />
            <Form.Check 
              type="radio" 
              label="디자인" 
              name="prefer_benefit" 
              checked={prefer_benefit === '3'}
              value="3"
              onChange={(e) => {setPrefer_benefit(e.target.value); setStep(3);}}
            />
            <Form.Check 
              type="radio" 
              label="연회비" 
              name="prefer_benefit" 
              checked={prefer_benefit === '4'}
              value="4"
              onChange={(e) => {setPrefer_benefit(e.target.value); setStep(3);}}
            />
            <Form.Check 
              type="radio" 
              label="전월실적 금액" 
              name="prefer_benefit" 
              checked={prefer_benefit === '5'}
              value="5"
              onChange={(e) => {setPrefer_benefit(e.target.value); setStep(3);}}
            />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick2}>다음</Button>
              </div>
          </Form.Group>
          )} 
          

          { prefer_benefit === '1' && step === 4 &&(
              <Form.Group className='modalfont3'>
                <Form.Label>4. 신용카드를 선택할 때 어떤 혜택을 가장 받고 싶으신가요?</Form.Label>
                <Form.Check 
                    type="radio" 
                    label="교통" 
                    name="most_benefit" 
                    checked={most_benefit === '1'}
                    value="1"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
                <Form.Check 
                    type="radio" 
                    label="문화" 
                    name="most_benefit" 
                    checked={most_benefit === '2'}
                    value="2"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
                <Form.Check 
                    type="radio" 
                    label="주유" 
                    name="most_benefit" 
                    checked={most_benefit === '3'}
                    value="3"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
                <Form.Check 
                    type="radio" 
                    label="편의점" 
                    name="most_benefit"
                    checked={most_benefit === '4'} 
                    value="4"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
                <Form.Check 
                    type="radio" 
                    label="놀이공원" 
                    name="most_benefit"
                    checked={most_benefit === '5'}
                    value="5"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
                <Form.Check 
                    type="radio" 
                    label="여행" 
                    name="most_benefit" 
                    checked={most_benefit === '6'}
                    value="6"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
                <Form.Check 
                    type="radio" 
                    label="쇼핑" 
                    name="most_benefit" 
                    checked={most_benefit === '7'}
                    value="7"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
                <Form.Check 
                    type="radio" 
                    label="온라인 결제" 
                    name="most_benefit"
                    checked={most_benefit === '8'} 
                    value="8"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
                <Form.Check 
                    type="radio" 
                    label="다 받고싶다" 
                    name="most_benefit" 
                    checked={most_benefit === '9'}
                    value="9"
                    onChange={(e) => setMost_benefit(e.target.value)}
                />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
            )}

          { prefer_benefit === '2' && step === 4 &&( 
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 어떤 항공 마일리지를 선호 하시나요?</Form.Label>
              <Form.Check 
                  type="radio" 
                  label="대한항공" 
                  name="airport_mileage" 
                  checked={airport_mileage === '1'}
                  value="1"
                  onChange={(e) => setAirport_mileage(e.target.value)}
              />
              <Form.Check 
                  type="radio" 
                  label="아시아나항공" 
                  name="airport_mileage" 
                  checked={airport_mileage === '2'}
                  value="2"
                  onChange={(e) => setAirport_mileage(e.target.value)}
              />
              <Form.Check 
                  type="radio" 
                  label="저비용 항공사" 
                  name="airport_mileage" 
                  checked={airport_mileage === '3'}
                  value="3"
                  onChange={(e) => setAirport_mileage(e.target.value)}
              />
              <Form.Check 
                  type="radio" 
                  label="모두 포함" 
                  name="airport_mileage" 
                  checked={airport_mileage === '4'}
                  value="4"
                  onChange={(e) => setAirport_mileage(e.target.value)}
              />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
            )}

          { prefer_benefit === '3' && step === 4 &&(
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 어떤 디자인을 선호 하시나요?</Form.Label>
                <Form.Check 
                  type="radio" 
                  label="캐릭터" 
                  name="prefer_design" 
                  checked={prefer_design === '1'}
                  value="1"
                  onChange={(e) => setPrefer_design(e.target.value)}
              />
                <Form.Check 
                  type="radio" 
                  label="색상" 
                  name="prefer_design" 
                  checked={prefer_design === '2'}
                  value="2"
                  onChange={(e) => setPrefer_design(e.target.value)}
              />
                <Form.Check 
                  type="radio" 
                  label="카드 회사의 상징" 
                  name="prefer_design" 
                  checked={prefer_design === '3'}
                  value="3"
                  onChange={(e) => setPrefer_design(e.target.value)}
              />
                <Form.Check 
                  type="radio" 
                  label="기타" 
                  name="prefer_design" 
                  checked={prefer_design === '4'}
                  value="4"
                  onChange={(e) => setPrefer_design(e.target.value)}
              />
                <Form.Check 
                  type="radio" 
                  label="모르겠음" 
                  name="prefer_design" 
                  checked={prefer_design === '5'}
                  value="5"
                  onChange={(e) => setPrefer_design(e.target.value)}
              />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
            )}

          { prefer_benefit === '4' && step === 4 &&(
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 연회비의 금액은 어느정도 생각하시나요?</Form.Label>
              <Form.Check 
                type="radio" 
                label="연간 수수료 없음" 
                name="card_year_fee" 
                checked={card_year_fee === '1'}
                value="1"
                onChange={(e) => setCard_year_fee(e.target.value)}
            />
              <Form.Check 
                type="radio" 
                label="30,000원 이하" 
                name="card_year_fee" 
                checked={card_year_fee === '2'}
                value="2"
                onChange={(e) =>  setCard_year_fee(e.target.value)}
            />
              <Form.Check 
                type="radio" 
                label="50,000원 이하" 
                name="card_year_fee" 
                checked={card_year_fee === '3'}
                value="3"
                onChange={(e) =>  setCard_year_fee(e.target.value)}
            />
              <Form.Check 
                type="radio" 
                label="상관 없음" 
                name="card_year_fee" 
                checked={card_year_fee === '4'}
                value="4"
                onChange={(e) =>  setCard_year_fee(e.target.value)}
            />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
            )}

          { prefer_benefit === '5' && step === 4 &&(
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 전월 실적 금액은 어느정도 생각하시나요?</Form.Label>
              <Form.Check 
                  type="radio" 
                  label="실적 없음" 
                  name="last_monthly_expense" 
                  checked={last_monthly_expense === '1'}
                  value="1"
                  onChange={(e) => setLast_monthly_expense(e.target.value)}
              />
              <Form.Check 
                  type="radio" 
                  label="30만원 이하" 
                  name="last_monthly_expense" 
                  checked={last_monthly_expense === '2'}
                  value="2"
                  onChange={(e) => setLast_monthly_expense(e.target.value)}
              />
              <Form.Check 
                  type="radio" 
                  label="40만원 이하" 
                  name="last_monthly_expense" 
                  checked={last_monthly_expense === '3'}
                  value="3"
                  onChange={(e) => setLast_monthly_expense(e.target.value)}
              />
              <Form.Check 
                  type="radio" 
                  label="50만원 이하" 
                  name="last_monthly_expense"
                  checked={last_monthly_expense === '4'} 
                  value="4"
                  onChange={(e) => setLast_monthly_expense(e.target.value)}
              />
              <Form.Check 
                  type="radio" 
                  label="상관 없음" 
                  name="last_monthly_expense"
                  checked={last_monthly_expense === '5'} 
                  value="5"
                  onChange={(e) => setLast_monthly_expense(e.target.value)}
              />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
          )}
             { step === 5 &&(
            <Form.Group className='modalfont3'>
              <Form.Label>5. 개인화 맞춤 추천 카드를 선별하기 위해, 월 소비 금액을 선택해주세요.</Form.Label>
              <Form.Check 
                type="radio" 
                label="30만원 이하" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '1'}
                value="1"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="50만원 이하" 
                name="this_monthly_expense"
                checked={this_monthly_expense === '2'} 
                value="2"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="70만원 이하" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '3'}
                value="3"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="100만원 이하" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '4'}
                value="4"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="100만원 이상" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '5'}
                value="5"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
            <div className="modalButtonContainer">
              <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
              <Button className="modalButton" type="submit">제출하기</Button>
            </div>
            </Form.Group>
            )}

            { card_own_yn === "1" && step === 6 && (
            <>
              <Form.Group className='modalfont3'>
                <Form.Label>2. 신용카드를 추가로 만드는 목적은 무엇입니까?</Form.Label>
                <Form.Check 
                  type="radio" 
                  label="기존에 원하는 혜택이 없어서" 
                  name="card_purpose" 
                  value="5"
                  checked={card_purpose === '5'}
                  onChange={(e) => setCard_purpose(e.target.value)}
                />
                <Form.Check 
                  type="radio" 
                  label="무이자 할부 개월 수" 
                  name="card_purpose" 
                  checked={card_purpose === '6'}
                  value="6"
                  onChange={(e) => setCard_purpose(e.target.value)}
                />
                <Form.Check 
                  type="radio" 
                  label="무실적 또는 낮은 전월실적" 
                  name="card_purpose" 
                  checked={card_purpose === '7'}
                  value="7"
                  onChange={(e) => setCard_purpose(e.target.value)}
                />
                <Form.Check 
                  type="radio" 
                  label="금융상품 연계" 
                  name="card_purpose"
                  checked={card_purpose === '8'} 
                  value="8"
                  onChange={(e) => setCard_purpose(e.target.value)}
                />
                <Form.Check 
                  type="radio" 
                  label="기타" 
                  name="card_purpose"
                  checked={card_purpose === '9'} 
                  value="9"
                  onChange={(e) => setCard_purpose(e.target.value)}
                />
              <div className="modalButtonContainer">
                  <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                  <Button className="modalButton" type="button" onClick={handleNextClick1}>다음</Button>
                </div>
            </Form.Group>
            </>
            )}
            
            { card_own_yn === "1" && step === 7 && (
            <>
            <Form.Group className='modalfont3'>
              <Form.Label>3. 맞춤형 추천 카드를 선택하려면 월별 지출 금액을 입력하세요.</Form.Label>
              <Form.Check 
                type="radio" 
                label="30만원 이하" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '6'}
                value="6"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="50만원 이하" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '7'}
                value="7"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="70만원 이하" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '8'}
                value="8"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="100만원 이하" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '9'}
                value="9"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="100만원 이상" 
                name="this_monthly_expense" 
                checked={this_monthly_expense === '10'}
                value="10"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
              <Button className="modalButton" type="submit">제출하기</Button>
            </div>
            </Form.Group>
            </>
            )}
          </Form>
        </Modal.Body>
      </Modal>
      </div>
      </div>
      
      <Modal show={loading} centered={true} className="loadingModal">
        <Modal.Body className="Modal__Body">
            <div className="title">WON</div>
            <div className="info">필수 정보를 바탕으로 추천 중입니다.<br/> 잠시만 기다려 주세요.</div>
            <div className="note">고객 맞춤 추천을 위해 최대 3분까지 소요 될 수 있습니다.</div>
        </Modal.Body>
        </Modal>
    </>
  );
}

export default Modal2;