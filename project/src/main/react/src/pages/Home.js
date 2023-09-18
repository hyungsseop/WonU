import '../App.css';
import {Card, Button, Carousel } from 'react-bootstrap';
import { Routes, Route} from 'react-router-dom';
import Credit from './Credit';
import Modal2 from '../Components/Modal2';
function Home() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <br />
              <div className = "banner">
                <Carousel className="carousel-container">
                  <Carousel.Item className="carousel1">
                    <img
                      className="d-block w-100"
                      src=".\images\slider11.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src=".\images\slider22.png"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src=".\images\slider33.png"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
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
                      <div className='home1'>                      비회원도 이용할 수 있는 신용카드 추천 서비스 <br />
                      나에게 적합한 카드는 무엇일까요?
                      </div></Card.Text>
                    <Button className='custom3-button' href="/credit">기본 추천 받기</Button>
                  
                  </Card.Body>
                </Card>
                <Card style={{ width: '36rem' }}>
                  <Card.Img
                    variant="top"
                    src="./images/recom_image1.jpg"
                    height="270"
                  />
                  <Card.Body>
                    <Card.Text>
                    <div className='home1'>
                      나와 적합한 신용카드와 카드 분석 리포트까지 <br />
                      지금 바로 이용해보세요
                      </div></Card.Text>
                    <Modal2></Modal2>
                  </Card.Body>
                </Card>
              </div>
              <br/><br/>
            </>
          }
        />
        <Route path="/credit" element={<Credit />} />
        {/* // 카드 상품 내 상세페이지 */}
        {/* 경로가 어떤 것인지에 따라 실제 컴포넌트 이름이 들어가야 합니다 */}
        {/* 예: <Route path="/credit_modal" element={<CreditModal />} /> */}
      </Routes>
      </div>
  );
}

export default Home;