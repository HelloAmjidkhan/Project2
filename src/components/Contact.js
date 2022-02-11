import React from 'react';
import {Col, Container ,Row , Card , Form , Button} from 'react-bootstrap';
import './Styles.css';

const Contact = () => {
  return <div>
      <Container fluid id="contact-container"> <br /><br /><br /><br />
      <Col md={{ span: 6, offset: 3 }}>
              <h5 className='text-danger' >HAVE ANY QUERY?</h5>
              <h1 id="services" className='text-white'>Contact Me</h1>
              <p className='text-white' id="ser-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text</p>
          </Col><br /><br />
          <Row>
<Col xs={12} sm={12} md={6} lg={4}>
 <Card id="cont-crd">
    <Card.Header>
        <img src="./images/map.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>Locate us</Card.Title>
      <Card.Text className='text-white'>
     Uinversity Road Peshawar Pakistan
      </Card.Text> <br />
    </Card.Body>
  </Card>
 </Col>
 <Col xs={12} sm={12} md={6} lg={4}>
 <Card id="cont-crd">
    <Card.Header>
        <img src="./images/call.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>Give us a call</Card.Title>
      <Card.Text className='text-white'>   
        Office: +01-2345-6789
      </Card.Text> <br />
    </Card.Body>
  </Card>
 </Col>
 <Col xs={12} sm={12} md={6} lg={4}>
 <Card id="cont-crd">
    <Card.Header>
        <img src="./images/email.png" alt="" id="git-img"/>
    </Card.Header> <br />
    <Card.Body>
      <Card.Title className='text-white'>Get in online</Card.Title>
      <Card.Text className='text-white'>
     helloamjidkhan@gmail.com
      </Card.Text> <br />
    </Card.Body>
  </Card>
 </Col>
          </Row>
          <Row>
         <Col xs={12} sm={12} md={6} lg={6}>
         <Form>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" id="form" />
  </Form.Group>
</Form>
         </Col>
         <Col xs={12} sm={12} md={6} lg={6}>
         <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email" id="form" />
  </Form.Group>
</Form>
         </Col>
         <Col xs={12} sm={12} md={12} lg={12}>
         <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Subjest</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Subject" id="form" />
  </Form.Group>
</Form>
         </Col>
         <Col xs={12} sm={12} md={12} lg={12}>
         <Form>
<Form.Group className="mb-3" controlId="ControlTextarea">
    <Form.Label>Enter Your Message</Form.Label>
    <Form.Control placeholder="Enter Your Subject" as="textarea"  rows={4} id="form" />
  </Form.Group>
  <Button variant="outline-danger" size='lg'>Send Message</Button>
</Form>
         </Col>
          </Row>
       
      </Container>
  </div>;
};

export default Contact;
