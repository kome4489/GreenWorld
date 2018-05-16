import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class ManagerApp extends Component {
  render() {
    return (
      <div
        style={{
          display: 'block',
        }}
      >
        <div >
          <Header />
        </div>
        <div>
          <Body />
        </div>
      </div>
    );
  }
}

export default ManagerApp;
