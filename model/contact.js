const { Schema, model } = require("mongoose");

const contactSchema = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: [8, "phone number cannot be less than 8 characters long"],
  },
  address: {
    type: String,
    required: true,
    minLength: [15, "please provide your detail address"],
  },
});

module.exports = model("Contacts", contactSchema);
