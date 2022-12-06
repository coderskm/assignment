const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = mongoose.model('home',homeSchema)