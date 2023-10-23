import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(true);



  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <div className="nav-google">
            <img src={logo} alt="Logo" className="Logo" />
            <Col>
            <h2 className="nav-google-name web">Google Developer Student Club</h2>

            </Col>
          </div>
          </Navbar.Brand>
  
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/gdsc-iit-kanpur/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/gdsc.iitk/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
              </div>
              <a href="https://gdsc.community.dev/indian-institute-of-technology-iit-kanpur/" target="_blank" rel="noopener noreferrer">
                <button className="vvd"><span>Join Us</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
