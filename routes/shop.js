const express =require("express");
const router =express.Router();
const path= require("path");
// const rootDir =require("../util/path");
// const adminData = require("./admin");

const productsController = require("../controllers/products")
// const rootDir =require("../util/path");

router.get("/", productsController.getProducts);


module.exports = router;