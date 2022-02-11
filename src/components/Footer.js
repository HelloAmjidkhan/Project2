import React from 'react';
import {Col, Container , Row} from 'react-bootstrap';
import './Styles.css';

const Footer = () => {
  return <div>
      <Container fluid id="footer-container"> <br /><br /><br /><br /><br /><br />
      <Col md={{ span: 6, offset: 3 }}>
              <img src="./images/logo.png" alt="" /><br /><br />
              <p className='text-white' id="ser-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          </Col>
          <Row>
              <Col lg={{ span: 6, offset: 3 }}>
                    <img src="./images/facbook.png" alt="" id="footer-icon" />
                    <img src="./images/twitter.png" alt="" id="footer-icon" />
                    <img src="./images/git.png" alt="" id="footer-icon" />
                    <img src="./images/pointrest.png" alt="" id="footer-icon" />
              </Col>
          </Row>
      </Container>
  </div>;
};

export default Footer;
