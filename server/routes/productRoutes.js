const express = require("express");
const productControllers = require("../controllers/productController");

const router = express.Router();

router.route("/").get(productControllers.getAllProducts);

router.route("/:id").get(productControllers.getProduct);
module.exports = router;
