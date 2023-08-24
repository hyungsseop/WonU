import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header2() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">WON</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header2;