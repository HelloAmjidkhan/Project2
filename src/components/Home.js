import React from 'react';
import {Col, Container, Button , Row} from 'react-bootstrap';
import './Styles.css';

const Home = () => {
  return <div>
      <Container fluid id="main-container">
          <Row>
              <Col lg={6} sm={12} md={6} xs={12}>
                  <h1 className='text-white' id="main-text">I am Jonathan Doe</h1>
                  <p id="main-paragraph">i'm Jonathan, professional web developer with long time experience in this field​</p>
                  <Button variant="outline-danger" size='lg'>My Portoflio</Button>
              </Col>
              <Col lg={6} sm={12} md={6} xs={12}>
                  <img src="./images/man-01.png" alt="" id="main-img" />
              </Col>
          </Row>     
      </Container>
  </div>;
};

export default Home;
