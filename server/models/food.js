const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  name: { type: String },
  price: { type: String },
  foodclass: { type: String },
  image: { type: String },
  description: { type: String },
});

const FoodModel = mongoose.model("food", FoodSchema);

module.exports = FoodModel;
