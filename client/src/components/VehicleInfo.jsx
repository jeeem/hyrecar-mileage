import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import MileageHistory from './MileageHistory.jsx';

const VehicleInfo = (props) => {
  const {
    brand,
    make,
    model,
    year,
    miles,
    license
  } = props

  return (
    <Paper elevation={1} square>
      <div style={{display: 'flex', flexDirection: 'column', padding: '16px'}}>
        <Typography variant="h4" gutterBottom>{license}</Typography>
        <Typography variant="body1" gutterBottom>{brand} - {make} - {model} - {year}</Typography>
        <Typography variant="body1" gutterBottom>Current Mileage: {miles}</Typography>
        <MileageHistory />
      </div>
    </Paper>
  )
}

export default VehicleInfo;
