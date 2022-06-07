import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/DiversityAndInclusivity.css";
import blm from "../../assets/blm.png";
import pride from "../../assets/pride.png";
import bamePDF from "../../assets/documents/bame.pdf";
import lgbtPDF from "../../assets/documents/lgbt.pdf";

class DiversityAndInclusivity extends Component {
  render() {
    return (
      <Container fluid className="diversity">
        <Row className="">
          <Col md={8} lg={6} className="left col-md-6 col-lg-6">
            <h1>Diversity and Inclusion</h1>

            <p>
              {" "}
              We welcome players of all abilities, identities and walks of life.
              Whether you need help buying your first stick or need someone to
              talk to, our club takes the welfare of all our players seriously
              and has policies in place to facilitate a safe and welcoming
              environment.
            </p>

            <p>
              We do not tolerate any form of bigotry or hostility, but share the
              Green & Gold love with all. On this page you can find our
              manifestos ensuring the Caps are championing inclusion for all on
              and off the pitch.
            </p>
          </Col>
          <Col md={6} lg={6} className="right col-md-6 col-lg-6">
            <Row className="d-flex align-items-center justify-content-center">
              <a href={bamePDF} download>
                <img alt="" src={blm} className="img-fluid" />
              </a>
            </Row>
            <br />
            <Row className="d-flex align-items-center justify-content-center">
              <a href={lgbtPDF} download>
                <img alt="" src={pride} className="img-fluid" />
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default DiversityAndInclusivity;
