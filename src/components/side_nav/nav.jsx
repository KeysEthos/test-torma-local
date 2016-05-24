import React, { Component } from 'react';
import { Image, Form, Button, FormGroup, FormControl } from 'react-bootstrap';
import logoImg from './Tlogo.png';

//import Container from './DnD/container';

export default class SideNav extends React.Component {
  render() {
    require('./nav.less');
    return (
      <div>

      <div className="side_nav_top">
        <div style={{height: 'auto'}} >
          <Image src={logoImg} responsive />
        </div>
      </div>
      <div className="side_nav_filter">
        <Button type="submit"><i className="fa fa-refresh"></i></Button>
        <Form className="search_filter">
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button className="submit_button" type="submit"><i className="fa fa-search"></i></Button>
        </Form>
      </div>
      <div className="filter_unlisted_device_group">

      </div>




      </div>
    );
  }

}
