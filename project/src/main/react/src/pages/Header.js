import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Modal1 from '../Components/Modal1';

function Header({ isLoggedIn, onLogout }) {
    const navigate = useNavigate();
    

    const handleLogout = () => {
      localStorage.removeItem('login-token');
      onLogout(); 
      navigate('/');
  };

    const showAlert = (message) => {
        alert(message);
    };

    return (
        <div className="Header">
            <div className="Header1">
                <div className="nav_logo">
                    <Navbar bg="primary" data-bs-theme="dark" className="Header2">
                        <Container>
                            <Navbar.Brand href="/" className="Header3">
                                WON
                            </Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/credit">신용카드</Nav.Link>
                                <Nav.Link onClick={() => showAlert("대출 서비스는 현재 준비 중입니다.")}>대출</Nav.Link>
                                <Nav.Link onClick={() => showAlert("보험 서비스는 현재 준비 중입니다.")}>보험</Nav.Link>
                                <Nav.Link onClick={() => showAlert("예적금 서비스는 현재 준비 중입니다.")}>예적금</Nav.Link>
                            </Nav>
                            <form className="nav justify-content-end">
                                {isLoggedIn ? (
                                    <>
                                        <Nav.Link as={Link} to="/first">마이페이지</Nav.Link>
                                        <Nav.Link onClick={handleLogout}>로그아웃</Nav.Link>
                                        <div><Modal1></Modal1></div>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link as={Link} to="/signup">회원가입</Nav.Link>
                                        <Nav.Link as={Link} to="/login">로그인</Nav.Link>
                                        <div><Modal1></Modal1></div>
                                    </>
                                )}
                            </form>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );
}

export default Header;
