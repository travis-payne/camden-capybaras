import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <Container fluid className="aboutUs">
        <Row className="h-100 align-items-center">
          <Col md={6} lg={6} className="left col-md-6 col-lg-6">
            <p>
              North London is <br /> Green and Gold
            </p>
          </Col>
          <Col md={6} lg={6} className="right col-md-6 col-lg-6">
            <p>
              Founded in 2018, Camden Lacrosse Club is the fastest growing club
              in the South of England.
            </p>
            <p>
              In addition to a well connected North London training location our
              match squads and training accommodate players of all abilities.
              Our socials and stash are the envy of our rival clubs in the South
              of England.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AboutUs;
