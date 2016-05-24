import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export default class Menu extends React.Component {

  render() {

    require('./menu.less');

    return (
      <Navbar className="margin_fix">
      <Nav pullRight>
        <NavDropdown id="menu" className="menu_dropdown"
          title={
            <span><i className="fa fa-bars"></i></span>
          }
        >
          <MenuItem >Action</MenuItem>
          <MenuItem >Another action</MenuItem>
          <MenuItem >Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem >Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      </Navbar>
    );
  }
}
