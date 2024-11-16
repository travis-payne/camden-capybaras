import React from "react";
import { Navbar, Container, Nav, Row, Col, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { scroller } from "react-scroll";
import { isMobile } from "react-device-detect";

import logo from "../../assets/capslogo.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import privPolicy from "../../assets/documents/privpolicy.pdf";

import "../css/Navigation.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navColour: props.navBg,
      bg: props.bg,
      navBg: props.navBg,
      navExpanded: false,
    };

    if (this.state.navBg) {
      this.setState({
        navColour: props.navBg,
      });
    }
  }

  listenScrollEvent = (e) => {
    if (window.location.pathname === "/") {
      if (window.scrollY > 400) {
        this.setState({
          navColour: {
            transition: "background-color 1000ms linear",
            backgroundColor: "#0d4226",
          },
        });
      } else {
        this.setState({
          navColour: {
            transition: "background-color 1000ms linear",
            backgroundColor: "transparent",
          },
        });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  handleClick(elementName) {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
    this.closeNav();
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }

  homeNav() {
    return (
      <Nav className="m-auto w-100">
        <NavDropdown className="navlink mx-4" id={""} title={"About Us"}>
          <NavDropdown.Item
            className="nav-link-dropdown mx-4"
            onClick={() => this.handleClick("mensRules")}
          >
            Mens Rules
          </NavDropdown.Item>
          <NavDropdown.Item
            className="nav-link-dropdown  mx-4"
            onClick={() => this.handleClick("womensRules")}
          >
            Womens Rules
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link
          className="navlink mx-4"
          onClick={() => this.handleClick("training")}
        >
          Training
        </Nav.Link>
        {/* <Nav.Link
          className="navlink mx-4"
          onClick={() => this.handleClick("fixtures")}
        >
          {" "}
          Fixtures & Tables
        </Nav.Link> */}
        <Nav.Link
          className="navlink mx-4"
          onClick={() => this.handleClick("joinUs")}
        >
          Contact Us
        </Nav.Link>
        <Nav.Link href="/diversity" className="navlink mx-4">
          {" "}
          D&I Information
        </Nav.Link>
        <Nav.Link href={privPolicy} download className="navlink mx-4">
          Privacy Policy
        </Nav.Link>
      </Nav>
    );
  }

  otherNav() {
    return (
      <Nav className="m-auto w-100">
        <Nav.Link
          href="/"
          className="navlink mx-4"
          onClick={() => this.handleClick("aboutUs")}
        >
          Home
        </Nav.Link>
        <Nav.Link href="/diversity" className="navlink mx-4">
          {" "}
          D&I Information
        </Nav.Link>
      </Nav>
    );
  }

  render() {
    let navColour = this.state.navColour;
    if (this.state.navExpanded && isMobile) {
      navColour = {
        backgroundColor: "#0d4226",
      };
    }

    return (
      <div className="landingNav" style={this.state.bg}>
        <Router>
          <Navbar
            onToggle={() => this.setNavExpanded(!this.state.navExpanded)}
            expanded={this.state.navExpanded}
            style={navColour}
            fixed="top"
            expand="lg"
          >
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="65"
                height="65"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {window.location.pathname === "/"
                ? this.homeNav()
                : this.otherNav()}
              <Nav className="ml-auto">
                <Nav.Link href="https://www.facebook.com/CamdenLacrosse/">
                  <img alt="Facebook Page" src={facebook} />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/camden_lacrosse/">
                  <img alt="Instagram Page" src={instagram} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Router>
        {window.location.pathname === "/" ? (
          <Container fluid className="lowerLandingNav">
            <Row>
              <Col className="left">
                <h1>Camden Capybaras</h1>
                <h2>LACROSSE CLUB</h2>
              </Col>
              <Col className="right d-flex justify-content-center"></Col>
            </Row>
          </Container>
        ) : null}
      </div>
    );
  }
}

export default Navigation;
