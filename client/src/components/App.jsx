import React, { useState } from 'react';

import validation from '../helpers/validation.jsx'
import sendUpdate from '../helpers/sendUpdate.jsx'
import getAllVehicles from '../helpers/getAllVehicles.jsx'
import getVehicleByLicense from '../helpers/getVehicleByLicense.jsx'

import ControlledInput from './ControlledInput.jsx';
import InsertConfirmation from './InsertConfirmation.jsx';
import NewVehicleCard from './NewVehicleCard.jsx';
import UpdateConfirmation from './UpdateConfirmation.jsx';
import VehicleInfo from './VehicleInfo.jsx';
import VehicleListItem from './VehicleListItem.jsx';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

const App = () => {
  const [vehicleList, setVehicleList] = useState(['7LHC252', '7LHC253']);
  const [activeVehicle, setActiveVehicle] = useState({
    license: '7LHC252',
    brand: 'Toyota',
    make: 'Corolla',
    model: 'SE',
    year: '2020',
    miles: 34000
  });

  const getSingleVehicle = (license) => {
    return getVehicleByLicense(license).then(vehicleData => setActiveVehicle(vehicleData))
  }

  const getVehicleList = () => {
    return getAllVehicles().then(vehiclesData => setVehicleList(vehiclesData))
  }

  const renderVehicleList = () => {
    return (
      <List>
        { vehicleList.map(license => <VehicleListItem activeLicense={activeVehicle.license} license={license} key={license} onClick={() => getSingleVehicle(license)} />) }
      </List>
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard__vehicle-list">
        { renderVehicleList() }
        <NewVehicleCard />
      </div>
      <div className="dashboard__info">
        <VehicleInfo {...activeVehicle} />
      </div>
    </div>
  )
}

export default App;
