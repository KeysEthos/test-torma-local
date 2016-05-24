import React, { Component } from 'react';


export default class Tab extends React.Component {

  render() {
    require('./tab.less');
    return(
      <div>
        <div className="tab_port">
          <h3>Tab-Group</h3>
        </div>
      </div>
    );
  }
}
