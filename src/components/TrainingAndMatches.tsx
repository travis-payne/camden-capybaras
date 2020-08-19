import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Iframe from 'react-iframe'
import './TrainingAndMatches.css';

class TrainingAndMatches extends Component {

  render() {
    return (
        <Container fluid className="trainingAndMatches">
        <Row className="h-100">
          <Col md={1} className="left col-md-6 align-self-center">
              <h2>Training & Matches</h2>
              <h4>Training</h4>
              <p>Saturdays 12:00 - 14:30 <br />
                Mill Hill Park<br />
                Daws Ln<br />
                London NW7 4SD<br />
              </p>

          </Col>
          <Col md={1} className="right col-md-6 d-flex justify-content-center">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.5839252619817!2d-0.2418674844151911!3d51.61251187965254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616db7ddfc59b%3A0x8cbebb2e8dbeee49!2sMill%20Hill%20Park!5e0!3m2!1sen!2suk!4v1597846198274!5m2!1sen!2suk"
              width="75%"
              height="100%"
              frameBorder="0"
            />
          </Col>
        </Row>
      </Container>
    );
  }

}
export default TrainingAndMatches;