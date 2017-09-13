import React, { Component } from 'react';
import '../styles/App.css';
import SimpleList from './SimpleList';
import UserDetails from './UserDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../stores';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={SimpleList}/>
              <Route path="/user/:id" component={UserDetails}/>
            </Switch>
          </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
