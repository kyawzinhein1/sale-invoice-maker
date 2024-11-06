const { PrismaClient } = require("@prisma/client");
const { route } = require("../routes/products");
const prisma = new PrismaClient();

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, description, price, stock },
    });

    res.status(200).json({
      isSuccess: true,
      data: newProduct,
      message: "create product successfully.",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get all products
exports.getAllProducts = async (req, res) => {
  try {
    const productDoc = await prisma.product.findMany();
    return res.status(200).json({
      isSuccess: true,
      productDoc,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

// get product by id
exports.getProductById = async (req, res) => {
  try {
    const productDoc = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    return res.status(200).json({
      isSuccess: true,
      productDoc,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: { name, description, price, stock },
    });
    return res.status(200).json({
      isSuccess: true,
      updatedProduct,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json({ isSuccess: true, message: "Product deleted" });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
