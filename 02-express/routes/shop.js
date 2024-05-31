const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");
const productsController = require("../controllers/product");

const express = require("express");

const router = express.Router();

// console.log("shop.js", adminData.products);
// here slash "/" refers to our root folder of the os, use path module
router.get("/", productsController.getProducts);

module.exports = router;
