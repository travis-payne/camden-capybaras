import React, { Component } from 'react';
// import Navigation from 'components/Navigation/Navigation';
import Navigation from 'components/Navigation';
import AboutUs from 'components/AboutUs';
import JoinUs from 'components/JoinUs';
import TrainingAndMatches from 'components/TrainingAndMatches';
import Footer from 'components/Footer';

import teamphoto from 'assets/teamphoto.png';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="landing">
        <Navigation />
        <AboutUs />
        <div className="teamPhoto" style={{ backgroundImage: `url(${teamphoto})` }} />
        <TrainingAndMatches />
        <JoinUs />
        <Footer />
      </div>

    );
  }

}
export default App;