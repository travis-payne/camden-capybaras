import React from 'react';
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import './Navigation.css';
import logo from '../../assets/capslogo.png';
import bame from '../../assets/documents/bame.pdf';
import lgbt from '../../assets/documents/lgbt.pdf';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Splash from '../../components/Splash/splash';

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Navbar expand="lg">
          <Navbar.Brand className="navbar-brand mx-auto" href="/">
            <img alt="" src={logo} width="150" height="150" className="d-inline-block align-top" /></Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button className="mx-2 navButton"><Link className="nav-link" to="/splash">Home</Link></Button>
            </Nav>
            <Nav className="ml-auto">

              <Button className="navButton">
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