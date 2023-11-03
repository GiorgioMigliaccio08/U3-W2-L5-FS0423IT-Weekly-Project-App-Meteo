import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "../asset/image.jpg";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <Image src={logo} alt="Logo Meteo" fluid className="NavBar-logo" />
        App Meteo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#forecast">Previsioni</Nav.Link>
          <NavDropdown title="Options" id="basic-nav-dropdown">
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#about">About</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
