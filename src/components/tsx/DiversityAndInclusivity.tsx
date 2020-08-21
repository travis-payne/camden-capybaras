import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/DiversityAndInclusivity.css';
import blm from '../../assets/blm.png';
import pride from '../../assets/pride.png';
import bamePDF from '../../assets/documents/bame.pdf';
import lgbtPDF from '../../assets/documents/lgbt.pdf';


class DiversityAndInclusivity extends Component {

  render() {
    return (
      <Container fluid className="diversity">
      <Row className="">
        <Col md={8} lg={6} className="left col-md-6 col-lg-6">
          <h1>Diversity and Inclusion</h1>
          <p>We welcome players of all skill levels, identities and walks of life. 
              Whether you need help buying your first stick or need someone to talk to 
             "WELFARE OFFICER", we are a club with community at our heart.</p>

              <p>We pride ourselves on proactively making our club a safe and welcoming 
              environment for all of our players, spectators and supporters. </p>

              <p>We do not tolerate any form of bigotry or hostility, but share the Green & 
            Gold love with all. On this page you can find our manifestos ensuring the 
            Caps are championing inclusion for all on and off the pitch.</p>
        </Col>
        <Col md={6} lg={6} className="right col-md-6 col-lg-6">
          <Row className="d-flex align-items-center justify-content-center">      
          <a href={bamePDF} download>      
          <img 
                alt=""
                src={blm}
                className="img-fluid"/>          
            </a> 
          </Row>
          <br />
          <Row className="d-flex align-items-center justify-content-center">
            <a href={lgbtPDF} download>                           
          <img
                alt=""
                src={pride}
                className="img-fluid"/>
            </a> 
              </Row>
        </Col>
      </Row>
    </Container>
    );
  }

}
export default DiversityAndInclusivity;