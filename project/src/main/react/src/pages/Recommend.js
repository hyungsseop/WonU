import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import First from './First';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/Recommend.css';
import Star from '../Components/Star';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardDisplay from './CardDisplay';


function Recommend(props) {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const toggleShowMore = () => {setShowMore(!showMore);};

  

  const [currentRating, setCurrentRating] = useState(0); 
  const handleRatingChange = (rating) => {
    setCurrentRating(rating);
  };

  const handleSubmitRating = async () => {
    try {
      const submissionId = localStorage.getItem('submissionId'); // submissionId 가져오기

      const response = await axios.post('YOUR_SERVER_ENDPOINT', {
        survey_satisfy: currentRating,
        submissionId: submissionId,
      });

      alert('서비스 평점이 정상적으로 제출되었습니다. 더 좋은 서비스로 찾아뵙겠습니다.');
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('현재 네트워크가 불안정합니다. 잠시 후 다시 시도해주세요.');
    }
  };
        return (
          <div className="main-container">
             <CardDisplay />
          {/* <h2 className="recommended-title"> 사회초년인 김피사 님을 위한 추천 신용카드</h2> */}
          {/* {cardData && <div><li>총사용금액: {cardData["총사용금액"]}</li></div>} */}
          <div className='header-section'>
        </div>
            

        <div className="footer-section">
          <Button variant="primary" className="button1" onClick={handleGoHome}>추천 다시 받기</Button>
          <Button variant="primary" className="button2" onClick={handleShowModal}>마음에 들어요</Button>
        </div><br/><br/>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>서비스 평점 매기기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Star onRatingChange={handleRatingChange}></Star>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>다음에 평가할래요</Button>
              <Button variant="primary" onClick={() => handleSubmitRating()}>이 점수 줄게요.</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
    }

export default Recommend;
