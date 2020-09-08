const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
  brand: String,
  make: String,
  model: String,
  year: Number,
  miles: Number,
  license: String
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
