import React, { Component } from 'react';
import { Image, Form, Button, FormGroup, FormControl } from 'react-bootstrap';
import logoImg from './Tlogo.png';
import MenuTree from './sideMenu/sideMenu';
import Tabby from './tabs/tab';

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
        <Button type="submit" href="/"><i className="fa fa-refresh"></i></Button>
        <span className="search_text"> Refresh</span>
      </div>
      <div className="filter_unlisted_device_group">
      <div className="search_text">Search:</div>
      <MenuTree />
      </div>

      </div>
    );
  }

}
