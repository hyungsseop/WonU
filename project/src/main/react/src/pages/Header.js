import { useState } from 'react';
import "./css/Header.css";
import { Navbar, Container, Nav, Card, Button, NavLink } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Credit from './Credit';


function Header() {

  return (
    <div className="Header">
      <div className="header_wrap">
        <div className="nav_logo">
          <Navbar bg="primary" data-bs-theme="dark" className="won-nav">
            <Container>
              <Navbar.Brand href="/" className="won-font">
                WON
              </Navbar.Brand>
              <Nav className="me-auto">
                {/* <Nav.Link onClick={()=>{ navigate('/') }}>HOME</Nav.Link> */}
                {/* <Nav.Link onClick={()=>{ navigate('/credit') }}>신용카드</Nav.Link> */}
                <Nav.Link href="credit">신용카드</Nav.Link>
                <Nav.Link href="loan">대출</Nav.Link>
                <Nav.Link href="insurance">보험</Nav.Link>
                <Nav.Link href="deposit">예적금</Nav.Link>
              </Nav>
              <form class="d-flex">
                <Nav.Link href="signup">회원가입</Nav.Link>
                <li></li>
                <Nav.Link href="login">로그인</Nav.Link>
              </form>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;