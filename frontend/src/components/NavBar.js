import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    const handleLogout = (e) => {
      e.preventDefault()
      window.localStorage.removeItem("token")
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
              <LinkContainer to="/view-accounts">
                <Nav.Link>Manage Insurance Policies</Nav.Link>
              </LinkContainer>
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