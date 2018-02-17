import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import NewContractAddressForm from '../components/NewContractAddressForm';
import ChooseYoPath from '../components/ChooseYoPath';

class NotificationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abi: [],
      contractAddress: '',
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

  renderStreamStep() {
    switch (this.state.step) {
      case 1:
        return (
          <ChooseYoPath />
        );
      case 2:
        return (
          <NewContractAddressForm
            address={this.state.contractAddress}
            onChange={this.updateValues}
          />
        );
      default:
        return <div>Step Default</div>;
    }
  }


  render() {
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
