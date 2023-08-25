// header.js

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isLogin, setIsLogin] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    let token = localStorage.getItem('login-token');
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('login-token');
    setIsLogin(false);
    navigate('/');
  };

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
                <Nav.Link as={Link} to="/credit">신용카드</Nav.Link>
                <Nav.Link as={Link} to="/loan">대출</Nav.Link>
                <Nav.Link as={Link} to="/insurance">보험</Nav.Link>
                <Nav.Link as={Link} to="/deposit">예적금</Nav.Link>
              </Nav>
              <form className="d-flex">
                {isLogin ? (
                  <>
                    <Nav.Link as={Link} to="/first">마이페이지</Nav.Link>
                    <li></li>
                    <Nav.Link onClick={handleLogout}>로그아웃</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/signup">회원가입</Nav.Link>
                    <li></li>
                    <Nav.Link as={Link} to="/login">로그인</Nav.Link>
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