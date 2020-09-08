const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');

const vehicleController = require('../database/controllers/vehicle');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

require('../database/')

app.get('/vehicles', (req, res) => {
  return vehicleController.findAllVehicles()
  .then((allVehicles) => {
    const allLicenses = allVehicles.map(vehicle => vehicle.license)
    console.log('returning', allLicenses)
    return res.json(allLicenses).send();
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({error: true}).send()
  })
});

app.get('/vehicles/:license', (req, res) => {
  return vehicleController.findVehicleByLicense(req.params.license)
  .then((vehicleObject) => {
    console.log('returning', vehicleObject)
    return res.json(vehicleObject).send();
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({error: true}).send()
  })
});

app.post('/vehicles', (req, res) => {
  return vehicleController.findVehicleAndUpdate(req.body)
  .then((vehicleObject) => {
    console.log('returning', vehicleObject)
    return res.json(vehicleObject).send();
  }).catch((err) => {
    console.log(err)
    return res.status(500).json({error: true}).send()
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
