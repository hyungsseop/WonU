import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './css/Modal2.css';
import { useNavigate } from "react-router-dom";

function Modal2() {
  const navigate = useNavigate();
  
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkenBackground, setDarkenBackground] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <Modal.Title className="Modal-font">
          필요한 정보를 입력하세요
        </Modal.Title>
      </Modal.Header>
        <br/>
        <Modal.Body>
          <p>
          필요한 정보를 입력하여 적합한 신용 카드와 카드 분석 보고서를 받으세요.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>1. 직업은 무엇입니까?</Form.Label>
              <Form.Control type="text" placeholder="직업을 입력하세요" />
            </Form.Group>

            <Form.Group>
              <Form.Label>2. 현재 신용 카드를 가지고 있습니까?</Form.Label>
              <Form.Check type="radio" label="Yes" name="hasCreditCard" />
              <Form.Check type="radio" label="No" name="hasCreditCard" />
            </Form.Group>

            <Form.Group>
              <Form.Label>3. 월 평균 얼마를 소비하십니까?</Form.Label>
              <Form.Control type="number" placeholder="백만원 단위로 입력해주세요" />
            </Form.Group>

            <Form.Group>
              <Form.Label>4. 어떤 유형의 소비에 가장 많은 돈을 사용하십니까? (여러 개를 선택할 수 있습니다)</Form.Label>
              <Form.Check type="checkbox" label="음식" />
              <Form.Check type="checkbox" label="엔터테인먼트" />
              <Form.Check type="checkbox" label="여행" />
            </Form.Group>

            <div className="modalButtonContainer">
              <Button className="modalButton" type="submit">제출하기</Button>
            </div>
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