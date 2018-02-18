import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons/Button';
import { withRouter } from 'react-router';

import './NotificationFooter.css';

class NotificationFooter extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className={
          'footer ' +
          (this.props.step >= 4 ? 'footer--disable' : 'footer--enable')
        }>
          <Button
            // className="footer__link footer-button"
            className={
              'footer-button ' +
              (this.props.step >= 1 ? 'footer--disable' : 'footer--enable')
            }
            flat
            id="footer-btn__previous"
            onClick={() => this.props.stepBack()}
          >Back</Button>
          <Button
            id="footer-btn__next footer-button"
            disabled={!this.props.validInput()}
            onClick={() => this.props.advanceStep()}
            primary
            raised
            type="submit"
          >Next</Button>
        </div>
      </div>
    );
  }
}

NotificationFooter.propTypes = {
  advanceStep: PropTypes.func,
  stepBack: PropTypes.func,
  validInput: PropTypes.func,
};

export default withRouter(NotificationFooter);
