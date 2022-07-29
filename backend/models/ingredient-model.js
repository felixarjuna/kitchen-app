const mongoose = require("mongoose");

// Create a Schema
const listSchema = mongoose.Schema({
  name: String,
  amount: String,
});

// Create Model from Schema
const Ingredient = mongoose.model("Ingredient", listSchema);

module.exports = Ingredient;
