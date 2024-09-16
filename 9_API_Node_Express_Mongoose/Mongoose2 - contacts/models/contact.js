const mongoose = require("mongoose");

// Define the contact schema
const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: { type: Number, required: true },
  birthdate: { type: Number, required: true },
});

// Create and export the model
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
