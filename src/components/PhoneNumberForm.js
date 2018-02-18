import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Divider, TextField } from 'react-md';

import NotificationFooter from './NotificationFooter';

const PhoneNumberForm = ({ number, onChange, step, advanceStep, stepBack, validInput }) => {
  return (
    <Card className="number-card universal-card">
      <CardTitle title="Provide your a phone number to receive a SMS" />
      <Divider />
      <CardText>
        <TextField
          id="stream-phone-number"
          label="Phone Number"
          required
          value={number}
          onChange={value => onChange('number', value)}
          className="md-cell"
          type='tel'
          errorText="Please enter a valid phone number"
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

PhoneNumberForm.propTypes = {
  number: PropTypes.string,
  updateValues: PropTypes.func,
};

export default PhoneNumberForm;
