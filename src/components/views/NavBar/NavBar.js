import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';

const NavBar = () => {
    return(
      <Navbar bg="primary" variant="dark" className="rounded my-5">
        <Container>
          <Navbar.Brand href="#">Waiter.app</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;