import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getUsers} from '../actions/user'


class SimpleList extends Component {
  componentWillMount() {
    getUsers()
  }
  render() {
    return (
      <div className="SimpleList">
        <h3>SimpleList: This will display a list of users.</h3>
        {this.props.users.map(user => {
          return <div>testing {user.name.first}</div>
        })}
      </div>
    );
  }
}

function appStateToProps(appState) {
  return {users:appState.users}
}
export default connect(appStateToProps) (SimpleList);
