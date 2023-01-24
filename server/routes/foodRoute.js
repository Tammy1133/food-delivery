const router = require("express").Router();
const FoodModel = require("../models/food");

router.get("/getfood", async (req, res) => {
  try {
    const allFood = await FoodModel.find({});
    res.status(200).json(allFood);
  } catch (error) {
    console.log(error);
  }
});
router.post("/addfood", async (req, res) => {
  const data = req.body;
  try {
    const newFood = await new FoodModel(data);
    res.status(200).json(newFood);
    newFood.save();
  } catch (error) {
    console.log(error);
  }
});
router.delete("/deletefood/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await FoodModel.findByIdAndDelete(id);
    res.status(200).json("Deleted");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
