import React, { Component } from 'react';
import {Tab,Tabs} from 'react-bootstrap';
import '../../css/FixturesAndTables.css';
import InnerFixtures from '../Fixtures/InnerFixturesTabs';


class DiversityAndInclusivity extends Component {

  render() {
    return (
      <div id="fixtures">
      <Tabs className="justify-content-center" defaultActiveKey="fixtures">
        <Tab eventKey="fixtures" title="Fixtures and Results">
          <InnerFixtures statistic="fixtures" />
        </Tab>
        <Tab eventKey="standings" title="Standings">
          <InnerFixtures statistic="standings" />
        </Tab>
    </Tabs>
    </div>
    );
  }

}
export default DiversityAndInclusivity;