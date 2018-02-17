import React, { Component } from 'react';
import { Card, TextField } from 'react-md';

class NotificationForm extends Component {
  render() {
    return (
      <Card>
        <form>
          <TextField
            id="application-number"
            label="Phone Number"
            className="md-cell md-cell--12"
            type='number'
            required
          />
        </form>
      </Card>
    )
  }
}

export default NotificationForm;
