import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import NotificationForm from './NotificationForm';

import './App.css';
import 'material-design-icons/iconfont/material-icons.css';

export class App extends Component {
  async componentDidMount() {
    console.log(tubsContract);
    const { dispatch, tubs } = this.props;
    // setInterval(function() {
    await dispatch(fetchNotifications());
    checkPercentage(tubs);
    // }, 3000);
  }

  render() {
    return (
      <div className="App">
        
        <div className="App-content">
          <Switch>
            <Route
              exact
              path="/"
              component={NotificationForm}
            />
            <Route path="/home" component={NotificationForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  tubs: state.database.tubs,
});

export default connect(mapStateToProps)(App);
