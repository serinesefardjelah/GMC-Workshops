const mongoose = require("mongoose");

//User schema
let userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let User = (module.exports = mongoose.model("User", userSchema));