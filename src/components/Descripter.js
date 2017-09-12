import React, { Component } from 'react';
import SimpleList from './SimpleList';
import UserDetails from './UserDetails';

class Descripter extends Component {
  render() {
    return (
      <div className="Descripter">
        <h2>Descripter: This will switch simple and detailed view.</h2>
        <SimpleList />
        <UserDetails />
      </div>
    );
  }
}

export default Descripter;
