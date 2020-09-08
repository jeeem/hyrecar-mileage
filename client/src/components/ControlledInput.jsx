import React from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import validation from '../helpers/validation.jsx'

const ControlledInput = (props) => {
  const { error, label, removeError, type, updateValue, validationType, value } = props

  const handleChange = (event) => {
    const validationFn = validation[validationType]
    const isValid = validationFn(event.target.value)
    console.log(event.target.value, validationType, isValid)
    if (isValid) {
      if (error) {
        removeError()
      }
      updateValue(event.target.value)
    }
    return;
  }

  const helperText = error ? `Please enter a valid ${label}` : '';

  return (
    <div>
      <TextField label={label} value={value} onChange={handleChange} error={error} helperText={helperText} fullWidth={true}/>
    </div>
  );
}

export default ControlledInput
