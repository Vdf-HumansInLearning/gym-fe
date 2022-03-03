import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Link className="nav__link" to="/home">
              About
            </Link>
            <Link className="nav__link" to="/pricing">
              Contact
            </Link>
          </Nav>
          <Nav>
            <Link className="nav__link" to="/register">
              Register
            </Link>
            <Link className="nav__link" to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;
