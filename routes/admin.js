const path = require("path");
const express =require("express");
const router =express.Router();
// const rootDir =require("../util/path");
const productsController = require("../controllers/products");

router.get("/add-product" ,productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);

exports.routes = router;
// exports.products  =products;