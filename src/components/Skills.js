import React from 'react';
import {Col, Container , Button, Row} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Styles.css';

const Skills = () => {
  return <div>
      <Container fluid id="skill-container"><br /><br /><br /><br />
      <Col md={{ span: 6, offset: 3 }}>
              <h5 className='text-danger' >I'M EXPERT ON</h5>
              <h1 id="services" className='text-white'>My Skills</h1>
              <p className='text-white' id="ser-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text</p>
          </Col>
      <Row>
      <Col lg={6} sm={12} md={6} xs={12}>
         <h1 className='text-white' id="skill-heading">Let's Work Together</h1>
         <p id="main-paragraph">Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
         <Button variant="outline-danger" size='lg'>Hire Me Now</Button>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}>
      <ProgressBar now={75} id="progress-bar" /><br /><br />
      <ProgressBar now={70} /><br /><br />
      <ProgressBar now={65} /><br /><br />
      <ProgressBar now={60} /><br /><br />
      <ProgressBar now={55} />
      </Col>
      </Row>
      </Container>
  </div>;
};

export default Skills;
