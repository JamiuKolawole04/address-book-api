const router = require("express").Router();

const {
  registerContactHandler,
  getSingleContactHandler,
  getAllContactsHandler,
  updateContactHandler,
  deleteContactHandler,
  tokenHandler,
} = require("../controller/contact");
const authenticateUser = require("../middleware/authentication");

router
  .route("/")
  .post(authenticateUser, registerContactHandler)
  .get(authenticateUser, getAllContactsHandler);

router
  .route("/:id")
  .get(authenticateUser, getSingleContactHandler)
  .patch(authenticateUser, updateContactHandler)
  .delete(authenticateUser, deleteContactHandler);

router.route("/auth/token").get(tokenHandler);

module.exports = router;
