const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const foodRoute = require("./routes/foodRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/", foodRoute);

app.use("/", userRoute);
app.use("/", orderRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db Started"))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("app started ");
});
