const router = require("express").Router();

const orderModel = require("../models/order");

router.post("/order", async (req, res) => {
  const newOrder = req.body;
  try {
    const newUser = await new orderModel(newOrder);
    newUser.save();
    res.status(200).json("success");
  } catch (error) {
    console.log(error);
  }
});
router.put("/updatestatus/:id", async (req, res) => {
  const newstatus = req.body;
  const id = req.params.id;
  try {
    await orderModel.findByIdAndUpdate(id, newstatus);
    res.status(200).json("success");
  } catch (error) {
    console.log(error);
  }
});

router.get("/getorders", async (req, res) => {
  try {
    const allProducts = await orderModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
