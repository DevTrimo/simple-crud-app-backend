const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product-model.js");
const productsRoutes = require("./routes/products-routes.js");
const app = express();

//midleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("Hello From Node API Server");
});

mongoose
  .connect(
    "mongodb+srv://triplemo:triplemo@backenddb.hgire.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
