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
              <Col md={1} className="left col-md-6">
                <h3>Matches</h3>
                <br /> <br />
                <p>
                  SEMLA Home Fixtures:
                  <br /> <br /> Middlesex University (The Burroughs, London NW4
                  4BT)
                </p>
              </Col>
            </Row>

            {/* 
            Summer Training on Wednesdays 19:00 - 21:00
Regents Park

Season Training on Mondays 20:00 - 21:30
University College School Sports Fields (Farm Ave, London NW2 2BH)
Transport: Jubilee line, West Hampstead London Overground and Thameslink (Zone 2), Cricklewood Thameslink (Zone 3)

SEMLA home fixtures on Saturdays
Middlesex University (The Burroughs, London NW4 4BT)
Transport: Northern line and Thameslink (Zone 3/4) */}

            {/* <h5>In-Season</h5>
            <b>Mondays 20:00 - 21:30</b>
            <p>
              <br />
              University College School Sports Fields
              <br />
              Farm Ave
              <br />
              London NW2 2BH
              <br />
            </p>

            <h5>Summer</h5>
            <p>
              <b> Wednesdays 19:00 - 21:00</b>
              <br />
              Regents Park
              <br />
            </p> */}

            {/* Join us
At Camden we welcome players of all abilities and pride ourselves on the good vibes we bring, on and off the field.

Contact us
(Message box directed to Gmail account) */}
          </Col>
          <Col md={1} className="right col-md-6 d-flex justify-content-center">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.5839252619817!2d-0.2418674844151911!3d51.61251187965254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487616db7ddfc59b%3A0x8cbebb2e8dbeee49!2sMill%20Hill%20Park!5e0!3m2!1sen!2suk!4v1597846198274!5m2!1sen!2suk"
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
