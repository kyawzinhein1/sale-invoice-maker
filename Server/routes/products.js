const express = require("express");
const router = express.Router();

const productController = require("../controllers/products");

// products routes
router.post("/create", productController.createProduct);
router.get("/get-products", productController.getAllProducts);
router.get("/get-product/:id", productController.getProductById);
router.put("/update-product/:id", productController.updateProduct);
router.delete("/delete-product/:id", productController.deleteProduct);

module.exports = router;
