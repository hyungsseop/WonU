import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/Recommend.css';
import Star from '../Components/Star';
import { useNavigate } from 'react-router-dom';

function Recommend(props) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  


  const cards = [
    {
        card_no: 1,
        card_corp: '삼성',
        card_name: '삼성카드_taptap_O',
        domestic_fee: 10000,
        overseas_yn: 1,
        overseas_fee: 10000,
        min_last_month: 300000,
        min_this_month: 0,
        benefit_main: '할인',
        benefit_cate: '통신,포인트/캐시백,카페/베이커리,쇼핑,대중교통',
        card_url: 'https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1483',
        card_image: 'https://static11.samsungcard.com/wcms/home/scard/image/personal/b_AAP1483.png'
    },
    {
        card_no: 2,
        card_corp: '삼성',
        card_name: '삼성카드_&_MILEAGE_PLATINUM(스카이패스)',
        domestic_fee: 47000,
        overseas_yn: 1,
        overseas_fee: 49000,
        min_last_month: 0,
        min_this_month: 0,
        benefit_main: '적립',
        benefit_cate: '항공마일리지,프리미엄,쇼핑,주유,카페/베이커리',
        card_url: 'https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1452',
        card_image: 'https://static11.samsungcard.com/wcms/home/scard/image/personal/b_AAP1452_03.png'
    },
    {
        card_no: 10,
        card_corp: '삼성',
        card_name: '삼성_iD_PET_카드',
        domestic_fee: 15000,
        overseas_yn: 1,
        overseas_fee: 15000,
        min_last_month: 400000,
        min_this_month: 0,
        benefit_main: '할인',
        benefit_cate: '반려동물,쇼핑,간편결제,금융,문화',
        card_url: 'https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1773',
        card_image: 'https://vertical.pstatic.net/vertical-cardad/creatives/SS/10184/SS_10184_20221004-224031_ver.png'
    }
];

    return (
      <div className="main-container">
        <h2 className="recommended-title"> 사회초년인 김피사 님을 위한 추천 신용카드</h2>
        <div className="header-section">
          {cards.map((card) => (
            <Card key={card.card_no} className="card-item">
              <Card.Img variant="top" src={card.card_image} />
              <Card.Body>
                <Card.Title>{card.card_name}</Card.Title>
                <Card.Text>{card.benefit_main}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>국내 연회비: {card.domestic_fee}</ListGroup.Item>
                <ListGroup.Item>해외 연회비: {card.overseas_fee}</ListGroup.Item>
                <ListGroup.Item>혜택 모아보기:<br />{card.benefit_cate}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href={card.card_url}>더 많은 정보 원해요?</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </div><br/>
        <div className="footer-section">
          <Button variant="primary" className="button1" onClick={handleGoHome}>추천 다시 받기</Button>
          <Button variant="primary" className="button2" onClick={handleShowModal}>마음에 들어요</Button>
        </div>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>서비스 평점 매기기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Star></Star>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>다음에 평가할래요</Button>
              <Button variant="primary" onClick={handleCloseModal}>이 점수 줄게요.</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
    }

export default Recommend;
