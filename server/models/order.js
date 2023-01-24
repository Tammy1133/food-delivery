const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  cartItems: {
    type: [],
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Not Delivered",
  },
});

const userModel = mongoose.model("orders", orderSchema);

module.exports = userModel;
