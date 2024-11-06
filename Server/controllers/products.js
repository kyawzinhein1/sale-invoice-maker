const { PrismaClient } = require("@prisma/client");
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
    const products = await prisma.product.findMany();
    return res.status(200).json({
      isSuccess: true,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

// Get a single product by ID
// router.get("/:id", async (req, res) => {
//   const product = await prisma.product.findUnique({
//     where: { id: parseInt(req.params.id) },
//   });
//   res.json(product);
// });
