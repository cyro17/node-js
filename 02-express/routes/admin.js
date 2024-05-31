const path = require("path");
const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.js");

const rootDir = require("../util/path");

//  this route matches with "/admin/add-product"  => GET
router.get("/add-product", productController.getAddProduct);

// this route matches with "/admin/product"  => POST
router.post("/product", productController.postAddProduct);

exports.routes = router;
