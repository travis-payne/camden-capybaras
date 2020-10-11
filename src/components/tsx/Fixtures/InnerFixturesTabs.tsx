import React, { Component } from 'react';
import { Table, Tabs, Tab, Container } from 'react-bootstrap';
import '../../css/InnerFixturesTabs.css';
const axios = require('axios').default;

class InnerFixturesTabs extends Component {

  private requests = new Map();

  constructor(props) {
    super(props);
    this.requests.set('1s', { fixtures: ['http://www.southlacrosse.org.uk/rest/fixtures/mens/Camden+Capybaras.html'], standings: ['http://www.southlacrosse.org.uk/rest/tables/mens/D1.html', 'http://www.southlacrosse.org.uk/rest/tables/mens/L-Lon2.html'] })
    this.requests.set('2s', { fixtures: ['http://www.southlacrosse.org.uk/rest/fixtures/mens/Camden+Capybaras+2.html'], standings: ['http://www.southlacrosse.org.uk/rest/tables/mens/E-N.html', 'http://www.southlacrosse.org.uk/rest/tables/mens/L-Lon4.html'] })
    this.requests.set('3s', { fixtures: ['http://www.southlacrosse.org.uk/rest/fixtures/mens/Camden+Capybaras+3.html'], standings: ['http://www.southlacrosse.org.uk/rest/tables/mens/E-S.html', 'http://www.southlacrosse.org.uk/rest/tables/mens/L-Lon4.html'] })
    this.state = { data: [], headers: [], captions: [] };
    this.handleSelect('1s');
  }

  render() {
    return (
      <Container fluid className="innerfixtures">
        <Tabs className="justify-content-center" onSelect={this.handleSelect} defaultActiveKey="1s">
          <Tab eventKey="1s" title="Camden 1s">
            {this.state.data.length > 0 ? this.state.data.map((data, index) => {
              return this.generateTableFromArray(index);
            }) : "No Data"}
          </Tab>
          <Tab eventKey="2s" title="Camden 2s">
            {this.state.data.length > 0 ? this.state.data.map((data, index) => {
              return this.generateTableFromArray(index);
            }) : "No Data"}
          </Tab>
          <Tab eventKey="3s" title="Camden 3s">
            {this.state.data.length > 0 ? this.state.data.map((data, index) => {
              return this.generateTableFromArray(index);
            }) : "No Data"}
          </Tab>
        </Tabs>
      </Container>
    );
  }

  tableStringToArray(data) {

    var arr = [];
    var allTRs = data.getElementsByTagName("tr");
    for (var trCounter = 0; trCounter < allTRs.length; trCounter++) {
      var tmpArr = [];
      var allTDsInTR = allTRs[trCounter].getElementsByTagName("td");
      for (var tdCounter = 0; tdCounter < allTDsInTR.length; tdCounter++) {
        tmpArr.push(allTDsInTR[tdCounter].innerHTML);
      }
      arr.push(tmpArr);
    }

    return arr.filter(x => x.length);
  }

  getTableHeaders(data) {
    var headers = Array.from(data.getElementsByTagName("th")).map(x => { return x.innerHTML; });
    headers = headers.map((value) => {
      if (value.includes("Pos")) {
        return "Position";
      }
      return value;
    })
    return headers;
  }

  getData(team, stat) {
    let requestList = this.requests.get(team)[stat];
    let promises = [];
    let responses = []

    Array.prototype.forEach.call(requestList, request => {
      console.log(request);
      promises.push(
        axios.get(request).then(response => {
          var htmlTable = document.createElement("table");
          htmlTable.innerHTML = response.data;
          responses.push(htmlTable);
        })
      )
    })

    Promise.all(promises).then(() => {
      let captions = [];
      let headers = [];
      let data = [];

      responses.forEach((response) => {
        [...response.getElementsByTagName("caption")].forEach((caption) => {
          if (caption.innerHTML !== undefined)
            captions.push(caption.innerHTML);

        })
        headers.push(this.getTableHeaders(response));
        data.push(this.tableStringToArray(response));
      });
      this.setState({
        captions: captions,
        headers: headers,
        data: data,
      });

    })

  }

  handleSelect = (key) => {
    this.getData(key, this.props.statistic)
  }

  generateTableFromArray(i) {


    return (<Table size="sm" responsive="xl" striped bordered hover>
      <caption> {this.state.captions[i] !== null ? this.state.captions[i] : ""}</caption>
      <thead>
        <tr>
          {this.state.headers[i].map((header, index) => {
            return (<th>{header}</th>);
          })
          }
        </tr>
      </thead>
      <tbody>
        {
          this.state.data[i].map((row, index) => {

            return (
              <tr>
                {row.map((tableData) => {
                  return (<td>{tableData}</td>)
                })}
              </tr>
            )
          })
        }
      </tbody>
    </Table>)
  }


}
export default InnerFixturesTabs;