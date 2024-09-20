import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/NavBar.css'; // Make sure to update the path if needed

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="px-0"> {/* Removed unnecessary flex classes */}
        {/* Logo and Brand Name */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/src/assets/images/LogoBLC.svg" // Relative path from the public folder
            alt="Logo"
            className="navbar-logo"
          />
          <span className="navbar-brand-name">Neurotech</span>
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="ms-auto"> {/* Bootstrap 5 uses `ms-auto` for margin-start */}
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#divisions">Divisions</Nav.Link>
          <Nav.Link href="#join-us">Join Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
