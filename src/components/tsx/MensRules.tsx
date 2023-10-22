import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/MensRules.css";

class MensRules extends Component {
  render() {
    return (
      <Container fluid className="mensRules">
        <Row className="h-100 align-items-center">
          <Col md={6} lg={6} className="left col-md-6 col-lg-6">
            <p>Mens Teams</p>
          </Col>
          <Col md={6} lg={6} className="right col-md-6 col-lg-6">
            <p>
              Camden Capybaras Lacrosse Club Men’s Rules Section fields three
              senior men’s teams competing in the SEMLA Premier Division,
              Division 2, and East (North) respectively. All three teams also
              compete in the London Local Leagues as well as the Flags
              Tournament. With players ranging from current England
              internationals and ex-NCAA starters to BUCS players enjoying the
              competitive senior system and even new recruits who are taking
              their first steps into the world of lacrosse, there is something
              for everyone. Coaching is provided by Louis Alhage, former NCAA
              player and current star of The Fly. Louis brings his expertise and
              an infectious energy and enthusiasm to trainings, raising the
              level of all around him.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default MensRules;
