import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{margin: "0 auto"}}>
                <LinkContainer to="/shop">
                    <Nav.Link>Shop</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <LinkContainer to="/cart">
                    <Nav.Link>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                    <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}


export default NavBar;