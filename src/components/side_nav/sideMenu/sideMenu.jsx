import React, { Component } from 'react';
import InfinityMenu from 'react-infinity-menu';

export default class MenuTree extends React.Component {

  componentWillMount() {
    const tree = [
      {
        name: "Menu1",
        id: 0,
        isOpen: false,
        children: [
          {
            name: "Room-1",
            id: 0,
            isOpen: false,
            children: [
              {
                name: "Temp-Sensors",
                id: 7,
                children: [
                  {
                    name: "Sensor-1",
                    id: 0,
                    children: [
                      {
                        name: "sub-1",
                        id: 0,
                        children: [
                          {
                            name: "S-sub-1",
                            id: 0
                          },
                          {
                            name: "S-sub-2",
                            id: 1
                          },
                        ]
                      },
                      {
                        name: "Sensor-sub-2",
                        id: 1
                      },
                    ]
                  },
                  {
                    name: "Sensor-2",
                    id: 1
                  },
                  {
                    name: "sensor-3",
                    id: 2
                  }
                ]
              },
              {
                name: "Humidity-S",
                id: 9,
                children: [
                  {
                    name: "Sensor-1",
                    id: 0,
                    children: [
                      {
                        name: "Sensor-sub-1",
                        id: 0
                      },
                      {
                        name: "Sensor-sub-2",
                        id: 1
                      },
                    ]
                  },
                  {
                    name: "Sensor-2",
                    id: 1
                  },
                  {
                    name: "sensor-3",
                    id: 2
                  }
                ]
              },
              {
                name: "SubMenu1-3",
                id: 2,
                children: [
                  {
                    name: "Sensor-1",
                    id: 0
                  },
                  {
                    name: "Sensor-2",
                    id: 1
                  },
                  {
                    name: "sensor-3",
                    id: 2
                  }
                ]
              }
            ]
          },
          {
            name: "Room-2",
            id: 1,
            children: [
              {
                name: "Sub-SubMenu2-1",
                id: 0
              }
            ]
          },
          {
            name: "Room-3",
            id: 3,
            isOpen: false
          },
          {
            name: "Room-4",
            id: 4,
            isOpen: false
          },
          {
            name: "Room-5",
            id: 5,
            isOpen: false
          },
          {
            name: "Room-6",
            id: 5,
            isOpen: false
          },
          {
            name: "Room-7",
            id: 5,
            isOpen: false
          }
        ]
      },
      {
        name: "Menu2",
        id: 1,
        isOpen: false,
        children: [
          {
            name: "SubMenu2-1",
            id: 0
          },
          {
            name: "SubMenu2-2",
            id: 1
          },
          {
            name: "SubMenu2-3",
            id: 2
          }
        ]
      },
      {
        name: "Menu3",
        id: 2,
        isOpen: false,
        children: [
          {
            name: "SubMenu3-1",
            id: 0
          },
          {
            name: "SubMenu3-2",
            id: 1
          }
        ]
      }
    ];
    this.setState({
    tree: tree
  });
}
    onNodeMouseClick(event, tree, leaf) {
        this.setState({
            tree: tree
        });
        console.log( leaf.id ); // Prints the leaf id
        console.log( leaf.name ); // Prints the leaf name
    }
    onLeafMouseClick(event, leaf) {
        console.log( leaf.id );
        console.log( leaf.name );
    }

    onLeafMouseUp(event, leaf) {
        console.log( leaf.id );
        console.log( leaf.name );
    }

    onLeafMouseDown(event, leaf) {
        console.log( leaf.id );
        console.log( leaf.name );
    }

    render() {
      require('./sideMenu.less');
          return (
            <InfinityMenu
                tree={this.state.tree}
                onNodeMouseClick={this.onNodeMouseClick.bind(this)}
                onLeafMouseClick={this.onLeafMouseClick}
                onLeafMouseDown={this.onLeafMouseDown}
                onLeafMouseUp={this.onLeafMouseUp}
            />
        );
    }
}
