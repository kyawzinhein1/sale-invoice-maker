const express = require("express");
const router = express.Router();

const productController = require("../controllers/products");

// products routes
router.post("/create", productController.createProduct);
router.get("/get-products", productController.getAllProducts);

// Get a single product by ID
// router.get("/:id", async (req, res) => {
//   const product = await prisma.product.findUnique({
//     where: { id: parseInt(req.params.id) },
//   });
//   res.json(product);
// });

// Update a product
// router.put("/:id", async (req, res) => {
//   const { name, description, price, stock } = req.body;
//   const updatedProduct = await prisma.product.update({
//     where: { id: parseInt(req.params.id) },
//     data: { name, description, price, stock },
//   });
//   res.json(updatedProduct);
// });

// Delete a product
// router.delete("/:id", async (req, res) => {
//   await prisma.product.delete({
//     where: { id: parseInt(req.params.id) },
//   });
//   res.json({ message: "Product deleted" });
// });

module.exports = router;
