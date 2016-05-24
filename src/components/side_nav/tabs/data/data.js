import React, { Component } from 'react';

var SensorCollect = React.createClass({
        getInitialState: function() {
          return {
            sensor: []
          };
        },

        componentDidMount: function() {
          var self = this;
          $.get(this.props.source, function(result) {
            var collection = result.data.children;
            if (this.isMounted()) {
              this.setState({
                sensor : collection
              });
            }
          }.bind(this));
        },

        render() {
          sensor = this.state.sensor || [];
          return (
            <div>
              Data:
              <p>{sensor.data}</p>
            </div>
          );
        }
      });

export default SensorCollect;
