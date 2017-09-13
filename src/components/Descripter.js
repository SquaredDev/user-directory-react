import React, { Component } from 'react';
import SimpleList from './SimpleList';
import UserDetails from './UserDetails';
let userData = require('./randomUsers.json');



class Descripter extends Component {
  render() {
    return (
      <div className="Descripter">
        <h2>Descripter: This will switch simple and detailed view.</h2>
        <SimpleList userData={userData}/>
        <UserDetails userData={userData}/>
      </div>
    );
  }
}

export default Descripter;
