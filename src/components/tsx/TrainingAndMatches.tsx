import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Iframe from "react-iframe";
import "../css/TrainingAndMatches.css";

class TrainingAndMatches extends Component {
  render() {
    return (
      <Container fluid className="trainingAndMatches">
        <Row className="h-100">
          <Col md={1} className="left col-md-6 align-self-center">
            <h2>Training & Matches</h2>
            <Row className="h-100">
              <Col md={1} className="left col-md-6 align-self-center">
                <h3>Training</h3>
                <p>
                  <h5>Summer</h5>
                  Wednesdays 19:00 - 21:00
                  <br />
                  Regents Park
                </p>

                <p>
                  <h5>In-Season</h5>
                  Mondays 20:00 - 21:30 <br />
                  University College School Sports Fields <br />
                  Farm Ave <br />
                  London <br />
                  NW2 2BH
                </p>
              </Col>
              <Col md={1} className="left col-md-6 align-self-center">
                <h3>Matches</h3>

                <h5>Mens Home Fixtures:</h5>
                <p>Middlesex University (The Burroughs, London NW4 4BT)</p>
                <h5>Womens Home Fixtures:</h5>
                <p>The Regent's Park Hub (London NW1 4RU)</p>
              </Col>
            </Row>
          </Col>
          <Col md={1} className="right col-md-6 d-flex justify-content-center">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158760.28795709435!2d-0.482822067187522!3d51.55669250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876106283933e49%3A0xb25456faec9f0aad!2sUniversity%20College%20School%20Sports%20Fields!5e0!3m2!1sen!2suk!4v1680266087497!5m2!1sen!2suk"
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
