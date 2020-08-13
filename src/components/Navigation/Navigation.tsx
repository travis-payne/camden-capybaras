import React from 'react';
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../assets/capslogo.png';
import bame from '../../assets/documents/bame.pdf';
import lgbt from '../../assets/documents/lgbt.pdf';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Splash from '../../components/Splash/splash';

class Navigation extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      navbarOpen: false
    };
  }

  toggleNav = () => {
    this.setState({navbarOpen: !this.state.navbarOpen});
  };

  render() {
    return (
      <Router>
        <Navbar expand="lg">
        <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="125"
        height="125"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
            <Navbar.Toggle onClick={this.toggleNav} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button className="navButton" style={{fontSize: 9}}>
                <NavDropdown title="Club Inclusivity Policies" id="basic-nav-dropdown">                
                    <NavDropdown.Item href={bame} download> BAME Policy</NavDropdown.Item>
                    <NavDropdown.Item href={lgbt} download> LGBTQ+ Policy</NavDropdown.Item>
                </NavDropdown>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr />
        <Switch>
          <Route path="/splash">
            <Splash />
          </Route>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
      </Router>
    )
  }

}

export default Navigation;