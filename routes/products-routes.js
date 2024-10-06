const express = require("express");
const Product = require("../models/product-model");
const router = express.Router();
const productsController = require("../controllers/products-controller");
const { model } = require("mongoose");

router.get("/", productsController.getProducts);

router.get("/:id", productsController.getProduct);

router.post("/", productsController.createProduct);

router.put("/:id", productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;
