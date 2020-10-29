import React, { Component } from 'react';
// import Navigation from 'components/Navigation/Navigation';
import AboutUs from 'components/tsx/AboutUs';
import JoinUs from 'components/tsx/JoinUs';
import TrainingAndMatches from 'components/tsx/TrainingAndMatches';
import Footer from 'components/tsx/Footer';
import {Element} from 'react-scroll';
import teamphoto from '../assets/teamphoto.png';
import FixturesAndTables from 'components/tsx/Fixtures/FixturesAndTables';

import './css/App.css';

class MainPage extends Component {


  render() {
    return (
      <div>
          <Element className="element"name="aboutUs">
            <AboutUs />
          </Element>
          <Element className="element">
        <div className="teamPhoto">
          <img src={teamphoto} alt="teamPhoto" className="img-fluid"/>
        </div>
        </Element>
          <Element className="element"name="training">
            <TrainingAndMatches />
          </Element>

          <Element className="element"name="fixtures">
            <FixturesAndTables />
          </Element>

          <Element className="element"name="joinUs">
            <JoinUs />
          </Element>
        <Footer />
        </div>

    );
  }

}
export default MainPage;