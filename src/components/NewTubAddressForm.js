import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Divider, TextField } from 'react-md';

import NotificationFooter from './NotificationFooter';

const NewTubAddressForm = ({ address, onChange, step, advanceStep, stepBack, validInput}) => {
  return (
    <Card className="address-card universal-card">
      <CardTitle title="Provide your Tub Address" />
      <Divider />
      <CardText>
        <TextField
          id="stream-address"
          label="Tub Address"
          required
          value={address}
          onChange={value => onChange('tubAddress', value)}
          className="md-cell"
          errorText="Please enter a valid Tub Address"
        />
      </CardText>
      <NotificationFooter
        step={step}
        advanceStep={advanceStep}
        stepBack={stepBack}
        validInput={validInput}
      />
    </Card>
  );
};

NewTubAddressForm.propTypes = {
  address: PropTypes.string,
  updateValues: PropTypes.func,
};

export default NewTubAddressForm;
