import React from 'react';
import {Col, Container , Row} from 'react-bootstrap';
import './Styles.css';

const Protfolio = () => {
  return <div>
      <Container fluid id="protfolio-container"> <br /><br /><br /><br /><br />
      <Col md={{ span: 6, offset: 3 }}>
              <h5 className='text-danger' >Portfolio Showcase</h5>
              <h1 id="services" className='text-white'>Portfolio Showcase</h1>
              <p className='text-white' id="ser-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text</p>
          </Col><br /><br />
          <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
              <img src="./images/1p.jpg" alt="" id="protfolio-img"/>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
              <img src="./images/6p.jpg" alt="" id="protfolio-img"/>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
              <img src="./images/3p.jpg" alt="" id="protfolio-img"/>
              </Col>
          </Row><br />
          <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
              <img src="./images/4p.jpg" alt="" id="protfolio-img"/>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
              <img src="./images/2p.jpg" alt="" id="protfolio-img"/>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
              <img src="./images/5p.jpg" alt="" id="protfolio-img"/>
              </Col>
          </Row>
      </Container>
  </div>;
};

export default Protfolio;
