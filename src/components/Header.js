import React from 'react';
import {Navbar , Container , Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Offcanvas} from 'react-bootstrap';
import './Styles.css';

const Header = () => {
  return <div>
   
<Navbar className='navbar' expand={false}>
  <Container fluid>
    <img src="./images/logo.png" alt="" className='logo-img'/>
    <Navbar.Toggle aria-controls="offcanvasNavbar" id="toggle" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">My Services</Nav.Link>
          <Nav.Link href="#action2">About Us</Nav.Link>
          <Nav.Link href="#action2">My Skills</Nav.Link>
          <Nav.Link href="#action2">Portfolio</Nav.Link>
          <Nav.Link href="#action2">Contact Us</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  </div>;
};

export default Header;

