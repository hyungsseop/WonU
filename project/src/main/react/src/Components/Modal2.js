import React, { useState } from 'react';
import StepWizard from 'react-step-wizard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './css/Modal2.css';
import { useNavigate } from "react-router-dom";

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

  const handlePrevClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };  
  const handleNextClick = () => {
    if (step === 1) {  // Assume 1 is the step for card_purpose
      if (!card_purpose) {
        alert("Please select your purpose for getting a credit card.");
        return;
      } 
    } else if (step === 2) {  // Assume 2 is the step for most_benefit
      if (!most_benefit) {
        alert("Please select what benefits you the most.");
        return;
      }
    } else if (step === 3) {  // Assume 3 is the step for airport_mileage
      if (!airport_mileage) {
        alert("Please select your preference for airport mileage.");
        return;
      }
    } else if (step === 4) {  // Assume 4 is the step for prefer_design
      if (!prefer_design) {
        alert("Please select your design preference.");
        return;
      }
    } else if (step === 5) {  // Assume 5 is the step for card_year_fee
      if (!card_year_fee) {
        alert("Please select your annual fee preference.");
        return;
      }
    } else if (step === 6) {  // Assume 6 is the step for last_monthly_expense
      if (!last_monthly_expense) {
        alert("Please select your preference regarding the previous month's performance.");
        return;
      }
    }
    
    // If no conditions triggered an alert, proceed to the next step
    setStep(step + 1);
  };
  
    
   

  const handleFirstClick = () => {
    if (card_own_yn === 'yes') {
      setStep(6);
    } else if (card_own_yn === 'no') {
      setStep(2);
    } else if (!card_own_yn) {
      alert("추천서비스 이용을 위해 질문에 응답해주세요.");
    } 
  };
  

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

    await new Promise(res => setTimeout(res, 2000));

    setLoading(false);
    navigate("/credit/recommend");
    setShow(false);
    setDarkenBackground(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        회원 추천 받기
      </Button>
      <div className={`modal-overlay ${darkenBackground ? 'darken' : ''}`}>
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
              <Form.Label>1. 현재 신용카드를 가지고 계신가요?</Form.Label>
              <Form.Check
                type="radio"
                label="예"
                name="card_own_yn"
                value="yes"
                onChange={(e) => {setCard_own_yn(e.target.value);}}
              />
              <Form.Check
                type="radio"
                label="아니오"
                name="card_own_yn"
                value="no"
                onChange={(e) => {setCard_own_yn(e.target.value);}}
              />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handleFirstClick}>다음</Button>
              </div>
            </Form.Group>
          )}

          
          { card_own_yn === "no" && step === 2 && ( 
          <Form.Group className='modalfont3'>
            <Form.Label>2. 신용카드를 만드는 목적은 무엇입니까?</Form.Label>
            <Form.Check 
              type="radio" 
              label="혜택을 받기 위해" 
              name="card_purpose" 
              value="for_benefits"
              onChange={(e) => setCard_purpose(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="할부 사용" 
              name="card_purpose" 
              value="installment"
              onChange={(e) => setCard_purpose(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="소득 공제" 
              name="card_purpose" 
              value="tax_deduction"
              onChange={(e) => setCard_purpose(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="기타" 
              name="card_purpose" 
              value="others"
              onChange={(e) => setCard_purpose(e.target.value)}
            />
            <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
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
              value="discounts_rewards"
              onChange={(e) => setPrefer_benefit(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="항공마일리지" 
              name="prefer_benefit" 
              value="air_miles"
              onChange={(e) => setPrefer_benefit(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="디자인" 
              name="prefer_benefit" 
              value="design"
              onChange={(e) => setPrefer_benefit(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="연회비" 
              name="prefer_benefit" 
              value="annual_fee"
              onChange={(e) => setPrefer_benefit(e.target.value)}
            />
            <Form.Check 
              type="radio" 
              label="전월실적 금액" 
              name="prefer_benefit" 
              value="previous_month_performance"
              onChange={(e) => setPrefer_benefit(e.target.value)}
            />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
          </Form.Group>
          )} 
          

          { prefer_benefit === 'discounts_rewards' && step === 4 &&(
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 어떤 혜택을 가장 받고 싶으신가요?</Form.Label>
              <Form.Check type="radio" label="교통" name="most_benefit"/>
              <Form.Check type="radio" label="문화" name="most_benefit"/>
              <Form.Check type="radio" label="카페" name="most_benefit"/>
              <Form.Check type="radio" label="통신" name="most_benefit"/>
              <Form.Check type="radio" label="주유" name="most_benefit"/>
              <Form.Check type="radio" label="편의점" name="most_benefit"/>
              <Form.Check type="radio" label="놀이공원" name="most_benefit"/>
              <Form.Check type="radio" label="여행" name="most_benefit"/>
              <Form.Check type="radio" label="쇼핑" name="most_benefit"/>
              <Form.Check type="radio" label="온라인 결제" name="most_benefit"/>
              <Form.Check type="radio" label="다 받고싶다" name="most_benefit"/>
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
            )}

          { prefer_benefit === 'air_miles' && step === 4 &&( 
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 어떤 항공 마일리지를 선호 하시나요?</Form.Label>
              <Form.Check type="radio" label="대한항공" name="airport_mileage" />
              <Form.Check type="radio" label="아시아나항공" name="airport_mileage" />
              <Form.Check type="radio" label="저가항공" name="airport_mileage" />
              <Form.Check type="radio" label="모두 포함" name="airport_mileage" />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
            )}

          { prefer_benefit === 'design' && step === 4 &&(
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 어떤 디자인을 선호 하시나요?</Form.Label>
              <Form.Check type="radio" label="캐릭터" name="prefer_design" />
              <Form.Check type="radio" label="색상" name="prefer_design" />
              <Form.Check type="radio" label="카드사의 상징성" name="prefer_design" />
              <Form.Check type="radio" label="기타" name="prefer_design" />
              <Form.Check type="radio" label="잘모르겠다" name="prefer_design" />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
            )}

          { prefer_benefit === 'annual_fee' && step === 4 &&(
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 연회비의 금액은 어느정도 생각하시나요?</Form.Label>
              <Form.Check type="radio" label="연회비 없음" name="card_year_fee" />
              <Form.Check type="radio" label="3만원 이하" name="card_year_fee" />
              <Form.Check type="radio" label="5만원 이하" name="card_year_fee" />
              <Form.Check type="radio" label="상관 없음" name="card_year_fee" />
              <div className="modalButtonContainer">
                <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
                <Button className="modalButton" type="button" onClick={handleNextClick}>다음</Button>
              </div>
            </Form.Group>
            )}

          { prefer_benefit === 'last_monthly_expense' && step === 4 &&(
            <Form.Group className='modalfont3'>
              <Form.Label>4. 신용카드 선택 시, 전월 실적 금액은 어느정도 생각하시나요?</Form.Label>
              <Form.Check type="radio" label="무실적" name="card_monthly_fee" />
              <Form.Check type="radio" label="30만원 이하" name="card_monthly_fee" />
              <Form.Check type="radio" label="40만원 이하" name="card_monthly_fee" />
              <Form.Check type="radio" label="50만원 이하" name="card_monthly_fee" />
              <Form.Check type="radio" label="상관 없음" name="card_monthly_fee" />
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
                name="monthlyExpense" 
                value="under_300k"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="50만원 이하" 
                name="monthlyExpense" 
                value="under_500k"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="70만원 이하" 
                name="monthlyExpense" 
                value="under_700k"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="100만원 이하" 
                name="monthlyExpense" 
                value="under_1m"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
              <Form.Check 
                type="radio" 
                label="100만원 이상" 
                name="monthlyExpense" 
                value="over_1m"
                onChange={(e) => setThis_monthly_expense(e.target.value)}
              />
            <div className="modalButtonContainer">
              <Button className="modalButton" type="button" onClick={handlePrevClick}>이전</Button>
              <Button className="modalButton" type="submit">제출하기</Button>
            </div>
            </Form.Group>
            )}

            { card_own_yn === "yes" && step === 6 && (
            <>
            <Form.Group className='modalfont3'>
              <Form.Label>2. 맞춤형 추천 카드를 선택하려면 월별 지출 금액을 입력하세요.</Form.Label>
              <Form.Control
                type="number"
                placeholder="원화로 금액 입력"
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
      
      <Modal show={loading} centered={true} className="loadingModal">
        <Modal.Body className="Modal__Body">
            <div className="title">WON</div>
            <div className="info">필수 정보를 바탕으로 추천 중입니다.<br/> 잠시만 기다려 주세요.</div>
            <div className="note">고객 맞춤 추천을 위해 최대 N분까지 소요 될 수 있습니다.</div>
        </Modal.Body>
        </Modal>
    </>
  );
}

export default Modal2;