import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Divider, TextField } from 'react-md';

import NotificationFooter from './NotificationFooter';

// import './NewTubAddressForm.css';

const CollateralRatioForm = ({ collateralPercentage, onChange, step, advanceStep, stepBack, validInput}) => {
  return (
    <Card className="collateralPercentage-card universal-card">
      <CardTitle title="Collateral Ratio treshold" />
      <Divider />
      <CardText>
        <TextField
          id="stream-collateralPercentage"
          label="Collateral Ratio Percentage"
          required
          value={collateralPercentage}
          onChange={value => onChange('collateralPercentage', value)}
          className="md-cell"
          // errorText="Please enter a whole "
          type='number'
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

CollateralRatioForm.propTypes = {
  collateralPercentage: PropTypes.string,
  updateValues: PropTypes.func,
};

export default CollateralRatioForm;
