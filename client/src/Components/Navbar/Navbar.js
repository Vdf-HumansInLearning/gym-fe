import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

function NavbarC() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">
          <img className="navbar-logo" src="../../images/gym.png"></img> GymApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-start">
            <Nav.Link href="/home">About</Nav.Link>
            <Nav.Link href="/pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;
