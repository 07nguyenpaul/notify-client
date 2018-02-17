import React, { Component } from 'react';
import { Card, CardTitle } from 'react-md';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import NewTubAddressForm from '../components/NewTubAddressForm';
import PhoneNumberForm from '../components/PhoneNumberForm';
import CollateralRatioForm from '../components/CollateralRatioForm';
class NotificationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collateralPercentage: '',
      cdpID: '',
      number: '',
      step: 1,
    };
  }
  updateValues = (name, value) => {
    this.setState({ [name]: value });
  };
  advanceStep = () => {
    this.setState({ step: this.state.step + 1 });
  }
  stepBack = () => {
    this.setState({ step: this.state.step - 1 });
  }
  validInput = () => {
    switch(this.state.step) {
      case 1:
        return this.state.cdpID.length;
      case 2:
        return this.state.number.length === 10;
      case 3:
        return this.state.collateralPercentage.length;
      default:
        return
    }
  };
  renderStreamStep() {
    switch (this.state.step) {
      case 1:
        return (
          <NewTubAddressForm
            address={this.state.cdpID}
            onChange={this.updateValues}
            step={this.state.step}
            advanceStep={this.advanceStep}
            stepBack={this.stepBack}
            validInput={this.validInput}
          />
        );
      case 2:
        return (
          <PhoneNumberForm
            number={this.state.number}
            onChange={this.updateValues}
            step={this.state.step}
            advanceStep={this.advanceStep}
            stepBack={this.stepBack}
            validInput={this.validInput}
          />
        );
      case 3:
        return (
          <CollateralRatioForm
            collateralPercentage={this.state.collateralPercentage}
            onChange={this.updateValues}
            step={this.state.step}
            advanceStep={this.advanceStep}
            stepBack={this.stepBack}
            validInput={this.validInput}
          />
        );
      default:
        return (
          <Card>
            <CardTitle title="A SMS will be sent to you soon!"/>
          </Card>
        );
    }
  }
  render() {
    console.log(this.state.number, this.state.cdpID, this.state.collateralPercentage);
    console.log(this.state.cdpID);
    console.log(this.state.collateralPercentage);
    return (
      <div>
        {this.renderStreamStep()}
      </div>
    )
  }
}
NotificationForm.propTypes = {
  dispatch: PropTypes.func,
};
export default withRouter(NotificationForm);