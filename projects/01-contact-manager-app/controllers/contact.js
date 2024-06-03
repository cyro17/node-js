//@desc Get  contact
//@route GET /api/contacts
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

//@desc Update all contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "create contact" });
};

//@desc Get contact
//@route POST /api/contacts
//@access public

const getContactDetails = (req, res) => {
  res.status(201).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update all contacts
//@route POST /api/contacts
//@access public

const updateContact = (req, res) => {
  res.status(201).json({ message: `Update Contact for ${req.params.id}` });
};
//@desc Delete  contacts
//@route POST /api/contacts
//@access public

const deleteContact = (req, res) => {
  res.status(201).json({ message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  getContactDetails,
  updateContact,
  deleteContact,
};
