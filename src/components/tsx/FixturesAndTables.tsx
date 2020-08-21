import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/FixturesAndTables.css';
import logo from '../../assets/capslogo.png';



class DiversityAndInclusivity extends Component {

  render() {
    return (
      <Container fluid className="fixtures">
      <Row>
        <Col>
        <h1>Under Construction</h1>
        <img 
                alt=""
                src={logo}
                className="logo"
              />
        </Col>
      </Row>
    </Container>
    );
  }

}
export default DiversityAndInclusivity;