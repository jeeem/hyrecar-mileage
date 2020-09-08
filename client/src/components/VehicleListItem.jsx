import React, { useState } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const VehicleListItem = (props) => {
  const { activeLicense, license, onClick } = props;
  const isDisabled = (activeLicense === license);
  return (
    <ListItem button disabled={isDisabled} onClick={onClick}>
      <ListItemText primary={license} />
    </ListItem>
  )
}

export default VehicleListItem;
