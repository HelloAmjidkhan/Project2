import React from 'react';
import {Col, Container , Row} from 'react-bootstrap';
import './Styles.css';

const About = () => {
  return <div>
      <Container fluid id="about-container"> <br /> <br />
      <Col md={{ span: 6, offset: 3 }}>
              <h5 className='text-danger' >About Me</h5>
              <h1 id="services" className='text-white'>About Me</h1>
              <p className='text-white' id="ser-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text</p>
          </Col> <br /><br />
          <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                  <img src="./images/about-me.png" alt="" />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                  <h3 className='text-white' id="about-text">Hi There</h3>
                  <p id="about-pa">In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                  <p id="about-pa">nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                  <h5 className='text-danger' >Name</h5>
                  <h6 className='text-white'>Amjid khan</h6>
                  <h5 className='text-danger' >Phone</h5>
                  <h6 className='text-white'>091-335777-5</h6>
                  <h5 className='text-danger' >Email</h5>
                  <h6 className='text-white'>helloamjidkhan@gmial.com</h6>
                 
              </Col>
          </Row>
      </Container>
  </div>;
};

export default About;
