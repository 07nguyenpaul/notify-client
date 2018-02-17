import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import NotificationForm from '../components/NotificationForm';

import logo from '../assets/images/logo.svg';

import './App.css';
import 'material-design-icons/iconfont/material-icons.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NotificationForm />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(App);
