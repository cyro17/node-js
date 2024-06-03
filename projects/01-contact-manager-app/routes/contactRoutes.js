const express = require("express");
const router = express.Router();

const {
  getContact,
  createContact,
  getContactDetails,
  updateContact,
  deleteContact,
} = require("../controllers/contact");

router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .get(getContactDetails)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
