import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import '../../css/FixturesAndTables.css';
import InnerFixtures from '../Fixtures/InnerFixturesTabs';


class FixturesAndTables extends Component {

  render() {
    return (
      <div id="fixtures">
        <h2>Results, Fixtures & Standings</h2>
        <Tabs className="justify-content-center" defaultActiveKey="fixtures">
          <Tab eventKey="fixtures" title="Fixtures and Results">
            {/* <InnerFixtures statistic="fixtures" /> */}
          </Tab>
          <Tab eventKey="standings" title="Standings">
            {/* <InnerFixtures statistic="standings" /> */}
          </Tab>
        </Tabs>
      </div>
    );
  }

}
export default FixturesAndTables;