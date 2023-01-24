const userModel = require("../models/user");

const router = require("express").Router();

router.post("/registeruser", async (req, res) => {
  const user = req.body;
  try {
    const newuser = await new userModel(user);
    await newuser.save();
    res.status(200).json("Successfully Registered");
  } catch (error) {
    res.json(error);
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.find({ email, password });
    if (user.length > 0) {
      res.status(200).json(user);
    } else {
      res.json({ message: "Error" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
