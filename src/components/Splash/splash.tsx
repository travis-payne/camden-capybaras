import React from 'react';
import './splash.css'
import facebook from 'assets/facebook.png';
import instagram from 'assets/instagram.png';
import teamphoto from 'assets/teamphoto2.jpg';
import email from 'assets/email.png';

import { Nav,Jumbotron } from 'react-bootstrap';

class Splash extends React.Component {

  render() {
    return (
      <div className='landing'>
        <Jumbotron style={{backgroundImage: `url(${teamphoto})`}}>
        <div className="splashText">
        <h1>Full Site Coming Soon</h1>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item className="mx-4">
            <Nav.Link href="https://www.facebook.com/CamdenLacrosse/"><img alt="Facebook Page" className="jumboImg" src={facebook}/></Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-4">
            <Nav.Link href="https://www.instagram.com/camdencapybaras/"><img alt="Instagram Page"  className="jumboImg" src={instagram}/></Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-4">
            <Nav.Link href="mailto:john.white@rutgers.edu"><img alt="Email Link" className="jumboImg" src={email}/></Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
      </Jumbotron>
      </div>

    )
  }
}

export default Splash;