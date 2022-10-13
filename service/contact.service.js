const Contacts = require("../model/contact");

module.exports.createContact = async (data) => {
  return await Contacts.insertMany(data);
};

module.exports.getContactById = async (id) => {
  return await Contacts.findById(id);
};

module.exports.getAllContacts = async (
  pageNumber,
  limitNumber,
  firstName,
  lastName,
  phoneNumber,
  address
) => {
  const queryObj = {};

  if (firstName) {
    queryObj.firstName = { $regex: firstName, $options: "i" };
  }

  if (lastName) {
    queryObj.lastName = { $regex: lastName, $options: "i" };
  }

  if (phoneNumber) {
    queryObj.phoneNumber = { $regex: phoneNumber, $options: "i" };
  }

  if (address) {
    queryObj.address = { $regex: address, $options: "i" };
  }

  // getting page from controller or it defaults to 1
  const page = Number(pageNumber) || 1;
  // getting limit from controller or it defaults to 5
  const limit = Number(limitNumber) || 5;

  // implementing pagination by skiping the first limit
  const skip = (page - 1) * limit;

  return await Contacts.find(queryObj).skip(skip).limit(limit);
};

module.exports.updateContact = async (id, data) => {
  return await Contacts.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true,
  });
};

module.exports.deleteContact = async (id) => {
  return await Contacts.findByIdAndDelete(id);
};
