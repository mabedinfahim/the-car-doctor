import React from 'react';
import logo from '../../../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand as={Link} to="/"> <img className="w-50" src={logo} alt="logo"/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="home/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="home/experts">Experts</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to="/sign-up">
                      Sign Up
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;