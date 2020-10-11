import React, { Component } from 'react';
// import Navigation from 'components/Navigation/Navigation';
import Navigation from 'components/tsx/Navigation';
import {Switch,Route,} from "react-router-dom";
import MainPage from 'components/MainPage';
import DiversityAndInclusivity from 'components/tsx/DiversityAndInclusivity';
import FixturesAndTables from 'components/tsx/Fixtures/FixturesAndTables';

import paj from './assets/paj.png';
import 'components/css/App.css';

class App extends Component {
  render() {
    const noMainBg = {
      height: "15%",
      backgroundColor: "#FAFAFA"
    }
    const noMainNavBg = {
      backgroundColor: "#0d4226"
    }
    const mainBg = {
      height: "100%",
      backgroundImage: `url(${paj})`
    }
    
    return (
    
      <div className="landing">
        <Switch>
          <Route exact path="/">
          <Navigation bg={mainBg} navBg={null} />
            <MainPage />
          </Route>

          <Route path="/diversity">
          <Navigation bg={noMainBg} navBg={noMainNavBg} />
            <DiversityAndInclusivity />
          </Route>

          <Route path="/fixtures">
          <Navigation bg={noMainBg} navBg={noMainNavBg} />
            <FixturesAndTables />
          </Route>
          
        </Switch>

      </div>

    );
  }

}
export default App;