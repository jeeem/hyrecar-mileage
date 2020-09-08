import React, { useState } from 'react';

import validation from '../helpers/validation.jsx'
import sendUpdate from '../helpers/sendUpdate.jsx'

import ControlledInput from './ControlledInput.jsx';
import InsertConfirmation from './InsertConfirmation.jsx';
import UpdateConfirmation from './UpdateConfirmation.jsx';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const NewVehicleCard = (props) => {

  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleBrandError, setVehicleBrandError] = useState(false);

  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleMakeError, setVehicleMakeError] = useState(false);

  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleModelError, setVehicleModelError] = useState(false);

  const [vehicleYear, setVehicleYear] = useState(2020);
  const [vehicleYearError, setVehicleYearError] = useState(false);

  const [vehicleMiles, setVehicleMiles] = useState(0);
  const [vehicleMilesError, setVehicleMilesError] = useState(false);

  const [vehicleLicense, setVehicleLicense] = useState('');
  const [vehicleLicenseError, setVehicleLicenseError] = useState(false);

  const [vehicleResponse, setVehicleResponse] = useState(null);

  const validateField = (key, value) => {
    let type = 'textComplete'
    if (key === 'vehicleLicense') {
      type = 'licenseComplete'
    }
    if (key === 'vehicleMiles' || key === 'vehicleYear') {
      type = 'numberComplete'
    }
    const validationFn = validation[type]
    let isValid = validationFn(value)
    console.log(isValid, value, type)
    return isValid
  }

  const sendUpdateFn = () => {
    return sendUpdate({
      brand: vehicleBrand,
      make: vehicleMake,
      model: vehicleModel,
      year: vehicleYear,
      miles: vehicleMiles,
      license: vehicleLicense
    }).then(data => {
      console.log('response', data);
      setVehicleResponse({data})
    })
  }

  const validateAndSubmit = () => {
    let errorsExist = false;
    let newVehicleBrandError = false;
    let newVehicleMakeError = false;
    let newVehicleModelError = false;
    let newVehicleYearError = false;
    let newVehicleLicenseError = false;
    let newVehicleMilesError = false;

    if (!validateField('vehicleBrand', vehicleBrand)) {
      setVehicleBrandError(true)
      errorsExist = true;
    }
    if (!validateField('vehicleMake', vehicleMake)) {
      setVehicleMakeError(true)
      errorsExist = true;
    }
    if (!validateField('vehicleModel', vehicleModel)) {
      setVehicleModelError(true)
      errorsExist = true;
    }
    if (!validateField('vehicleYear', vehicleYear)) {
      setVehicleYearError(true)
      errorsExist = true;
    }
    if (!validateField('vehicleLicense', vehicleLicense)) {
      setVehicleLicenseError(true)
      errorsExist = true;
    }
    if (!validateField('vehicleMiles', vehicleMiles)) {
      setVehicleMilesError(true)
      errorsExist = true;
    }

    if (!errorsExist) {
      return sendUpdateFn();
    }
    return false
  }

  if (vehicleResponse && vehicleResponse.type === 'create') {
    return (
      <Paper elevation={1} square>
        <InsertConfirmation vehicle={responseObject} />
      </Paper>
    )
  }

  if (vehicleResponse && vehicleResponse.type === 'update') {
    return (
      <Paper elevation={1} square>
        <UpdateConfirmation vehicle={responseObject} />
      </Paper>
    )
  }

  return (
    <Paper elevation={1} square>
      <div style={{display: 'flex', flexDirection: 'column', padding: '16px'}}>
        <ControlledInput
          type="text"
          validationType="text"
          label="Brand"
          value={vehicleBrand}
          updateValue={(newVal) => setVehicleBrand(newVal)}
          error={vehicleBrandError}
          removeError={() => setVehicleBrandError(false)}/>
        <ControlledInput
          type="text"
          validationType="text"
          label="Make"
          value={vehicleMake}
          updateValue={(newVal) => setVehicleMake(newVal)}
          error={vehicleMakeError}
          removeError={() => setVehicleMakeError(false)}/>
        <ControlledInput
          type="text"
          validationType="text"
          label="Model"
          value={vehicleModel}
          updateValue={(newVal) => setVehicleModel(newVal)}
          error={vehicleModelError}
          removeError={() => setVehicleMakeError(false)}/>
        <ControlledInput
          type="text"
          validationType="number"
          label="Year"
          value={vehicleYear}
          updateValue={(newVal) => setVehicleYear(newVal)}
          error={vehicleYearError}
          removeError={() => setVehicleYearError(false)}/>
        <ControlledInput
          type="text"
          validationType="number"
          label="Miles"
          value={vehicleMiles}
          updateValue={(newVal) => setVehicleMiles(newVal)}
          error={vehicleMilesError}
          removeError={() => setVehicleMilesError(false)}/>
        <ControlledInput
          type="text"
          validationType="license"
          label="License"
          value={vehicleLicense}
          updateValue={(newVal) => setVehicleLicense(newVal)}
          error={vehicleLicenseError}
          removeError={() => setVehicleLicenseError(false)}/>
        <Button onClick={() => validateAndSubmit()} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </Paper>
  )
}

export default NewVehicleCard;
