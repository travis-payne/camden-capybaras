import React from 'react';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';



import logo from '../assets/capslogo.png';
import paj from '../assets/paj.png';

import facebook from 'assets/facebook.png';
import instagram from 'assets/instagram.png';


import './Navigation.css';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navColour: {}
    };
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({navColour: {
        transition: "background-color 1000ms linear",
        backgroundColor: "#0d4226"
      }
      })
    } else {
      this.setState({navColour:{
        transition: "background-color 1000ms linear",
        backgroundColor: "transparent"
      }})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }


  render() {
    return (
        <div className="landingNav" style={{ backgroundImage: `url(${paj})` }}>
          <Navbar style={this.state.navColour} fixed="top" expand="lg" >
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
                <Nav.Link href="https://www.facebook.com/CamdenLacrosse/"><img alt="Facebook Page" src={facebook} /></Nav.Link>
                <Nav.Link href="https://www.instagram.com/camdencapybaras/"><img alt="Instagram Page" src={instagram} /></Nav.Link>
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
    )
  }




}

export default Navigation;

