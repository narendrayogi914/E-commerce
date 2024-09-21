const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  subcategory: String,
  brand: String,
  stock: Number,
  rating: Number,
  reviews: Number,
  date: { type: Date, default: Date.now },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
