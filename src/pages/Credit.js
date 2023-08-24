import { useState } from 'react';
import '../App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Container, Nav, Card, Button, Row, Col} from 'react-bootstrap';
import Header from './Header';

function Credit() {
    return (
      <div>
        <Header />

      <div className='card-product'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/taptap_samsung.png" />
        <Card.Body>
          <Card.Title>카드사</Card.Title>
          <Card.Text>
            주요혜택
          </Card.Text>
          <Button variant="primary">상세 보기</Button>
        </Card.Body>
      </Card>
      <li></li>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <li></li>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <li></li>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
    );
  }

export default Credit;
