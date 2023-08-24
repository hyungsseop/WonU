import { useState } from 'react';
import '../App.css';
import {Card, Button} from 'react-bootstrap';
import { Routes, Route} from 'react-router-dom';
import Credit from './Credit';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header />
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <br />
              <div className="main-bg"></div>
              <br />
              <div className="card-parent">
                <Card style={{ width: '36rem' }}>
                  <Card.Img
                    variant="top"
                    src="./images/recom_image2.jpg"
                    height="270"
                  />
                  <Card.Body>
                    <Card.Text>
                      비회원도 이용할 수 있는 신용카드 추천 서비스 <br />
                      나에게 적합한 카드는 무엇일까요?
                    </Card.Text>
                    <Button href="/credit">기본 추천 받기</Button>
                  </Card.Body>
                </Card>
                <li></li>
                <Card style={{ width: '36rem' }}>
                  <Card.Img
                    variant="top"
                    src="./images/recom_image1.jpg"
                    height="270"
                  />
                  <Card.Body>
                    <Card.Text>
                      나와 적합한 신용카드와 카드 분석 리포트까지 <br />
                      지금 바로 이용해보세요
                    </Card.Text>
                    <Button href="/credit/recommend">회원 추천 받기</Button>
                  </Card.Body>
                </Card>
              </div>
            </>
          }
        />
        <Route path="/credit" element={<Credit />} />
        {/* // 카드 상품 내 상세페이지 */}
        {/* 경로가 어떤 것인지에 따라 실제 컴포넌트 이름이 들어가야 합니다 */}
        {/* 예: <Route path="/credit_modal" element={<CreditModal />} /> */}
      </Routes>
    </>
    </div>
  );
}

export default Home;
