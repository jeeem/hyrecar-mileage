const Vehicle = require('../models/vehicle.js');

const findVehicleAndUpdate = (vehicleObject) => {
  const newVehicle = new Vehicle(vehicleObject)

  const insertVehicle = () => {
    return new Promise((resolve, reject) => {
      return newVehicle.save(function (err) {
        if (err) {
          return reject(err);
        }
        vehicleObject.type = 'create';
        return resolve(vehicleObject)
        // saved!
      });
    });
  };

  return new Promise((resolve, reject) => {
    return Vehicle.findOneAndUpdate({ license: vehicleObject.license }, vehicleObject, function (err, vehicle) {
      console.log(err, vehicle)
      if (err) {
        return resolve(insertVehicle())
      }
      vehicleObject.type = 'update';
      return resolve(vehicleObject)
      // saved!
    });
  });
};

const findVehicleByLicense = (vehicleLicense) => {
  return new Promise((resolve, reject) => {
    return Vehicle.findOne({ license: vehicleLicense }, function (err, vehicle) {
      console.log(err, vehicle)
      if (err) {
        return reject(err)
      }
      return resolve(vehicle)
      // saved!
    });
  });
};

const findAllVehicles = () => {
  return new Promise((resolve, reject) => {
    return Vehicle.find({}, function (err, vehicles) {
      console.log(err, vehicles)
      if (err) {
        return reject(err)
      }
      return resolve(vehicles)
      // saved!
    });
  });
};

module.exports = {
  findVehicleAndUpdate,
  findVehicleByLicense,
  findAllVehicles
};
