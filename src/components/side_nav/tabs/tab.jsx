import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default class Tabby extends React.Component {

  render() {
    require('./tab.less');
    return(
      <div>
        <div className="tab_port">
          <Tabs className="tab_layout" defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">
              <div className="tab_content">
            <h1>Tab 1 content</h1>
              </div>
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              <div className="tab_content">
            <h1>Tab 2 content</h1>
              </div>
            </Tab>
            <Tab eventKey={3} title="Tab 3">
              <div className="tab_content">
            <h1>Tab 3 content</h1>
              </div>
            </Tab>
            <Tab eventKey={4} title="Tab 4">
              <div className="tab_content">
            <h1>Tab 4 content</h1>
              </div>
            </Tab>
            <Tab eventKey={5} title="Tab 5">
              <div className="tab_content">
            <h1>Tab 5 content</h1>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
