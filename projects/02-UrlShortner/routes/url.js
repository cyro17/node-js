const express = require("express");
const shortid = require("shortid");

const URL = require("../models/url");
const { handleGenerateNewShortURL } = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

module.exports = router;
