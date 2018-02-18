import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Divider, TextField } from 'react-md';

import NotificationFooter from './NotificationFooter';

const NewTubAddressForm = ({
  address,
  onChange,
  step,
  advanceStep,
  stepBack,
  validInput,
}) => {
  return (
    <Card className="address-card universal-card">
      <CardTitle title="Provide Your Collateralised Debt Position Identification (CDP ID)" />
      <Divider />
      <CardText>
        <TextField
          id="stream-address"
          label="CDP ID"
          required
          value={address}
          onChange={value => onChange('cdpID', value)}
          className="md-cell"
          errorText="Please enter a valid CPD ID"
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
