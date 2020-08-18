import React from 'react';
import { Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap';
import logo from '../assets/capslogo.png';
import paj from '../assets/paj.png';
import teamphoto from '../assets/teamphoto.png';
import facebook from 'assets/facebook.png';
import instagram from 'assets/instagram.png';


import './Navigation.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class Navigation extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      navbarOpen: false
    };
  }

  render() {
    return (
      <div className="landing">
        <div className="landingNav" style={{backgroundImage: `url(${paj})`}}>
            <Navbar expand="lg" >
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="m-auto w-100">
                  <Nav.Link className="navlink mx-4" href="#home">About Us</Nav.Link>
                  <Nav.Link className="navlink mx-4" href="#link">Training</Nav.Link>
                  <Nav.Link className="navlink mx-4" href="#home">Contact Us</Nav.Link>
                  <Nav.Link className="navlink mx-4" href="#link">Fixtures & Tables</Nav.Link>
                  <Nav.Link className="navlink mx-4" href="#link">D&I Information</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="https://www.facebook.com/CamdenLacrosse/"><img alt="Facebook Page" src={facebook}/></Nav.Link>
                <Nav.Link href="https://www.instagram.com/camdencapybaras/"><img alt="Instagram Page" src={instagram}/></Nav.Link>
              </Nav>
              </Navbar.Collapse>

            </Navbar>
            <Container fluid className="lowerLandingNav">
              <Row>
                <Col className="left">
                  <h1>Camden Capybaras</h1>
                  <h2>LACROSSE CLUB</h2>
                </Col>
                <Col className="right d-flex justify-content-center">
                </Col>
              </Row>
            </Container>
            </div>

            <Container fluid className="aboutUs">
              <Row className="h-100 align-items-center">
                <Col  md={1} className="left col-md-6">
                  <p>North London is <br /> Gold and Green</p>
                </Col>
                <Col md={1} className="right col-md-6">
                   <p>We're Camden Capybaras, the only north London Lacrosse club. With three teams, we elcome 
                        all players regardless of ability Cost of membership is £250 only north London club.We're 
                        Camden Capybaras, the only north London Lacrosse club. With three teams, we elcome all 
                        players regardless of ability Cost of membership is £250 only north London club.</p>
                </Col>
              </Row>
            </Container>
            <div className="teamPhoto" style={{backgroundImage: `url(${teamphoto})`}} />


            <Container fluid className="trainingAndMatches">
              <Row className="h-50">
                <Col  md={1} className="left col-md-6 d-flex justify-content-start">
                  <h2>Training</h2>
                </Col>
                <Col md={1} className="right col-md-6 justify-content-end">

                </Col>
                </Row>
                <Row className="h-50">
                <Col md={1} className="left col-md-6 d-flex justify-content-start">

                </Col>
              <Col md={1} className="right col-md-6 d-flex justify-content-end">
              <h2>Matches</h2>
              </Col>
              </Row>
            </Container>

            </div>
    )
  }

}

export default Navigation;