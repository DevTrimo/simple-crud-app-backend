const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"],
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
        type: String,
        required: false
      },
   
    description: String,
    stock: Number,
    discount: Number
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
