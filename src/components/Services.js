import React from 'react';
import './Styles.css';
import {Col, Container , Card, Row , Button} from 'react-bootstrap';

const Services = () => {
  return <div>
         <Container fluid id="main-services">
          <Col md={{ span: 6, offset: 3 }}>
              <h5 className='text-danger' >SERVICES</h5>
              <h1 id="services" className='text-white'>My Services</h1>
              <p className='text-white' id="ser-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text</p>
          </Col><br /><br />
          <Row>
          <Col lg={4} sm={12} md={4} xs={12}>
 <Card id="main-card">
    <Card.Header>
        <img src="./images/git.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>Web Development</Card.Title>
      <Card.Text className='text-white'>
      Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
      </Card.Text> <br />
      <Button variant="outline-danger" size='lg'>Learn More</Button>
    </Card.Body>
  </Card>
          </Col>
          <Col lg={4} sm={12} md={4} xs={12}>
 <Card id="main-card">
    <Card.Header>
        <img src="./images/design.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>Web Designing</Card.Title>
      <Card.Text className='text-white'>
      Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
      </Card.Text> <br />
      <Button variant="outline-danger" size='lg'>Learn More</Button>
    </Card.Body>
  </Card>
          </Col>
          <Col lg={4} sm={12} md={4} xs={12}>
 <Card id="main-card">
    <Card.Header>
        <img src="./images/video-edit.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>Video Editing</Card.Title>
      <Card.Text className='text-white'>
      Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
      </Card.Text> <br />
      <Button variant="outline-danger" size='lg'>Learn More</Button>
    </Card.Body>
  </Card>
          </Col>
          </Row><br/>
          <Row>
          <Col lg={4} sm={12} md={4} xs={12}>
 <Card id="main-card">
    <Card.Header>
        <img src="./images/photography.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>Photography</Card.Title>
      <Card.Text className='text-white'>
      Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
      </Card.Text> <br />
      <Button variant="outline-danger" size='lg'>Learn More</Button>
    </Card.Body>
  </Card>
          </Col>
          <Col lg={4} sm={12} md={4} xs={12}>
 <Card id="main-card">
    <Card.Header>
        <img src="./images/app.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>App Developing</Card.Title>
      <Card.Text className='text-white'>
      Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
      </Card.Text> <br />
      <Button variant="outline-danger" size='lg'>Learn More</Button>
    </Card.Body>
  </Card>
          </Col>
          <Col lg={4} sm={12} md={4} xs={12}>
 <Card id="main-card">
    <Card.Header>
        <img src="./images/seo.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>SEO Expart</Card.Title>
      <Card.Text className='text-white'>
      Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy
      </Card.Text> <br />
      <Button variant="outline-danger" size='lg'>Learn More</Button>
    </Card.Body>
  </Card>
          </Col>
          </Row>
      </Container>
  </div>;
};

export default Services;
