const jwt = require("jsonwebtoken");

const asyncWrapper = require("../middleware/async");
const {
  createContact,
  getContactById,
  getAllContacts,
  updateContact,
  deleteContact,
} = require("../service/contact.service");

const registerContactHandler = asyncWrapper(async (req, res) => {
  const contact = await createContact(req.body);

  res.status(201).json({
    success: true,
    message: "Contact created successfully",
    contact,
  });
});

const getSingleContactHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const contact = await getContactById(id);

  res.status(200).json({
    success: true,
    contact,
  });
});

const getAllContactsHandler = asyncWrapper(async (req, res) => {
  // destructuring page and limit from query string parameters
  const { page, limit, firstName, lastName, phoneNumber, address } = req.query;
  let contacts = await getAllContacts(
    page,
    limit,
    firstName,
    lastName,
    phoneNumber,
    address
  );

  res.status(200).json({
    success: true,
    nbHits: contacts.length,
    contacts,
  });
});

const updateContactHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const contact = await updateContact(id, req.body);

  res.status(200).json({
    success: true,
    message: "contact updated successfully",
    contact,
  });
});

const deleteContactHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  await deleteContact(id);

  res.status(200).json({
    success: true,
    message: "contact deleted successfully",
  });
});

const tokenHandler = asyncWrapper(async (req, res) => {
  const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
  };

  let randomNumber = Math.floor(1000 + Math.random() * 9000);
  const access_token = createAccessToken({ randomNumber });

  res.status(200).json({
    success: true,
    message: "token generated successfully",
    access_token,
  });
});

module.exports = {
  registerContactHandler,
  getSingleContactHandler,
  getAllContactsHandler,
  updateContactHandler,
  deleteContactHandler,
  tokenHandler,
};
