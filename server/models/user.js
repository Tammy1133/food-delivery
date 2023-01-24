const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String },
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
});

const userModel = mongoose.model("users", UserSchema);

module.exports = userModel;
