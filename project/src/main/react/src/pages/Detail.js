import { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import './css/Detail.css';

function Detail({ card }) {  // card 정보를 props로 받습니다.
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

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
        <div className='detail3'>
          <p>국내연회비: {card.domesticFee}</p>
          <p>해외연회비: {card.overseasFee}</p>
          <p>전월실적: {card.minLastMonth}</p>
          <p>당월실적: {card.minThisMonth}</p>
          <p>혜택: {card.benefitMate}</p>
          <p>주요 혜택: {card.benefitMain}</p>
        </div>
        <div className='detail4'>
        <button className='btn btn-primary' onClick={() => window.open(card.cardUrl, '_blank')}>카드 신청</button>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Detail;