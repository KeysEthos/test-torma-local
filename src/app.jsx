import React, { Component, PropTypes } from 'react';
import { link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import SideNav from './components/side_nav/nav';
import Menu from './components/main/menu/menu';
import Tab from './components/side_nav/tabs/tab';

export default class App extends React.Component {

render() {

  require('./main.less');
    return (
      <span>
        <Row className="main_grid">
          <Col md={3} >
            <SideNav />
          </Col>
          <Col md={9} >
            <Menu />
            <Tab />
          </Col>
        </Row>
      </span>
    );
  }
}
