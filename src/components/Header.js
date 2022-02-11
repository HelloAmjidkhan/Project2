import React from 'react';
import {Navbar , Container , Nav} from 'react-bootstrap';
import './Styles.css';

const Header = () => {
  return <div>
    <Navbar className='navbar'>
    <Container>
    <img src="./images/logo.png" alt="" className='logo-img'/>
    <Nav className='float-right'>
      <Nav.Link href="#home" className='text-white' id="nav-text">Home</Nav.Link>
      <Nav.Link href="#features" className='text-white' id="nav-text">Services</Nav.Link>
      <Nav.Link href="#pricing" className='text-white' id="nav-text">About</Nav.Link>
      <Nav.Link href="#pricing" className='text-white' id="nav-text">Skills</Nav.Link>
      <Nav.Link href="#pricing" className='text-white' id="nav-text">Protfolio</Nav.Link>
      <Nav.Link href="#pricing" className='text-white' id="nav-text">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>;
};

export default Header;
