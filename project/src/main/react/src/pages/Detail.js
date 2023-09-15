import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button} from 'react-bootstrap';
import './css/Detail.css';
import CardBenefits from '../Components/Cardbenefit';

function Detail({ card }) {  // card 정보를 props로 받습니다.
  const [showModal, setShowModal] = useState(false);
  const [cardBenefits, setCardBenefits] = useState([]);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => {
    axios.get('http://localhost:8080/cardbenefit')
      .then(response => {
        setCardBenefits(response.data);
        setShowModal(true);
      })
      .catch(error => {
        console.error('API 호출 중 에러 발생: ', error);
      });
  };

  return (
    <>
      <button className='btn btn-outline-primary' onClick={handleShowModal}>상세 보기</button>
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        
        <Modal.Header className='modal_header' closeButton>
          <Modal.Title className='detail5'> 상세 보기</Modal.Title>
        </Modal.Header>
        <div className='detail1'>
        <img src={card.card_image} alt={card.cardName} height="250px" width="158px"/>
        </div>
        <Modal.Body className='modal_body'>
        <h4 className='detail2'>{card.cardName}</h4> 
        <CardBenefits cardName={card.cardName} />
        <div className='detail3'>
          <p>국내 연회비: {card.domesticFee}원</p>
          <p>해외 연회비: {card.overseasFee}원</p>
          <p>전월 실적: {card.minLastMonth}원</p>
          <p>당월 실적: {card.minThisMonth}원</p>
        </div>
        <div className='detail4'>
        <button className='btn btn-primary application-button' onClick={() => window.open(card.cardUrl, '_blank')}>카드 신청</button>
      </div>
        </Modal.Body>
      </Modal>
    </>
    
  );
}

export default Detail;