import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, TextField } from 'react-md';

const NewContractAddressForm = ({ address, onChange}) => {
  return (
    <Card className="address-card">
      <CardTitle title="Provide your Contract Address" />
      <CardText>
        <TextField
          id="stream-address"
          label="Contract Address"
          required
          value={address}
          onChange={value => onChange('contractAddress', value)}
          className="md-cell"
        />
      </CardText>
    </Card>
  );
};

NewContractAddressForm.propTypes = {
  address: PropTypes.string,
  updateValues: PropTypes.func,
};

export default NewContractAddressForm;
