import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()
    const handleLogout = (e) => {
      e.preventDefault()
      window.localStorage.removeItem("token")
      navigate("/login")
    }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Insurance Inc.</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <LinkContainer to="/" onClick={handleLogout}>
              <Nav.Link>Log Out</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}


export default NavBar;