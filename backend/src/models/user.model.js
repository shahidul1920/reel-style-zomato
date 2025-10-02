const mongoose = require("mongoose");

const userScema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String
  }
}, {
    timestamps: true
});


const userModel = mongoose.model('users', userScema);

module.exports = userModel