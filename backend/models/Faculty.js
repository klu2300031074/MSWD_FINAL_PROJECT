const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Faculty', facultySchema);