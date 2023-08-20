import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = ({ isLoggedIn }) => {
  return (
  
    // 네비바는 예시로 넣어둔거에용!
<Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><div style={{width: '100%', textAlign: 'center', color: '#0066FF', fontSize: 40, fontFamily: 'Inter', fontWeight: '800', lineHeight: 2, wordWrap: 'break-word'}}>WON</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dropdown-item1">Dropdown Item 1</NavDropdown.Item>
            <NavDropdown.Item href="/dropdown-item2">Dropdown Item 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/dropdown-item3">Dropdown Item 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/regist">Sign Up</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <>
              <Nav.Link href="/logout">
               <Button variant="primary">로그아웃</Button>
              </Nav.Link>
              <Nav.Link href="/Mypage">
                <Button variant="primary">마이페이지</Button>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">
               <Button variant="primary">로그인</Button>
              </Nav.Link>
              <Nav.Link href="/regist">
                <Button variant="primary">회원가입</Button>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;