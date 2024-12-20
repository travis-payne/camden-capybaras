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
                <p>
                  <h5><b>Summer Training</b> </h5>
                  <h6> TBC for 2025 </h6>

                </p>

                <p>
                  <h5><b>In-Season Training</b></h5>
                  Mondays 19:45  - 21:30 <br />
                  University College School Sports Fields <br />
                  Farm Ave <br />
                  London <br />
                  NW2 2BH
                </p>
              </Col>
              <Col md={1} className="left col-md-6 align-self-center">

                <h5>Mens + Womens Home Fixtures:</h5>
                Hendon RFC <br />
                Greenlands Lane<br />
                Copthall Playing Fields<br />
                Hendon, London NW4 1RL

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
