import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const navigate = useNavigate()

    const handleLogout = (e) => {
      e.preventDefault()
      window.localStorage.removeItem("token")
      navigate("/login")
    }

    const logoutPop = () => (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sure you wanna logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Log Out
          </Button>
        </Modal.Footer>
      </Modal>
      
      )

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
            <LinkContainer to="/" onClick={() => setShow(true)}>
              <Nav.Link>Log Out</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          {logoutPop()}
        </Container>
      </Navbar>
  );
}


export default NavBar;