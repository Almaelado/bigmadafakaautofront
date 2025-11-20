import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">Auto kereskedés</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Kezdőlap</Nav.Link>
                    <Nav.Link as={Link} to="/autok">Autók</Nav.Link>
                    <NavDropdown title="Felhasználó" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/bejelentkez">Bejelentkezés</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/regisztracio">Regisztráció</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
