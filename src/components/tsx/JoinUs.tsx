import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/JoinUs.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
class JoinUs extends Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    return (
      <Container fluid className="joinUs">
      <Row className="h-100">
        <Col md={1} className="left col-md-12 ">
          <div>
            <h2>Join Us</h2>
            <p> At Camden we welcome everyone and pride ourselves
            on the good vibes we bring, on and off the field.
            We would love to get in touch so we can keep you
            updated and welcome you to the team!
              </p>
            <h2>Contact Us</h2>
            <p className="bebas">1st Team Co-Captains:
            </p>
            <p>
              Austin Colgate
              <br />Travis Payne
            </p>
            <p className="bebas">2nd Team Co-Captains:
            </p>
            <p>Luke Mullery
              <br />Tisharn Panglose
            </p>
            <p className="bebas">3rd Team Co-Captains:
            </p>
            <p>
              Rob Hebden
              <br />Sophie Gillibrand
            </p>
            <a href="https://www.facebook.com/CamdenLacrosse/"><img alt="Facebook Page" src={facebook} /></a>
                <a href="https://www.instagram.com/camdencapybaras/"><img alt="Instagram Page" src={instagram} /> </a>
          </div>


        </Col>
        {/* <Col md={1} className="right col-md-6 d-flex align-items-center justify-content-center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Control  placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">

                <Form.Control placeholder="Surname" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
              <Form.Control type="email" placeholder="Email Address"   />
            </Form.Group>

            <Form.Group controlId="formGridNumber">
              <Form.Control placeholder="Contact Number"  />
            </Form.Group>
            <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
          </Button>
          </div>
          </Form>
        </Col>*/}
      </Row> 
    </Container>
    );
  }

}
export default JoinUs;