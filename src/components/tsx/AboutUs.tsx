import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/AboutUs.css';

class AboutUs extends Component {

  render() {
    return (
      <Container fluid className="aboutUs">
      <Row className="h-100 align-items-center">
        <Col md={6} lg={6} className="left col-md-6 col-lg-6">
          <p>North London is <br /> Green and Gold</p>
        </Col>
        <Col md={6} lg={6} className="right col-md-6 col-lg-6">
          <p> Having the best vibe in London isn't easy.... but someone has to do it. 
              At Camden Capybaras LC we are proud to be the fastest growing SEMLA club 
              with a first team en route to the Premiership, 2Camden2Capybara hot on 
              their heels and Camden Capybaras 3: Tokyo Drift ready to accomodate 
              players at all levels of experience.<br />
            </p>
              
          <p> An accessible North London training location, match squads and training to 
              accomodate every level, regular amazing socials and the best stash in the 
              South means your search for a new Lacrosse Club stops here. 
          </p>
          <p> This year we're proud to be launching our third SEMLA team, as well as a 
            renewed focus on diversity, equality and inclusion by continuing our partnership
             with the Rainbow Rexes and moving to a new and improved home ground - now's the 
             time for you to join the Green & Gold!
          </p>
        </Col>
      </Row>
    </Container>
    );
  }

}
export default AboutUs;