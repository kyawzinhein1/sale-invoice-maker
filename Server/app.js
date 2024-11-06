const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
// const invoiceRoutes = require("./routes/invoiceRoutes");
// const saleRoutes = require("./routes/saleRoutes");

app.use(express.json());

app.use("/products", productRoutes);
// app.use("/invoices", invoiceRoutes);
// app.use("/sales", saleRoutes);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
