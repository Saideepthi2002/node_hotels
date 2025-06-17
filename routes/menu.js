const express = require("express");
const router = express.Router();

const MenuItems = require("../models/menu");

// Post the menu items
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const Items = new MenuItems(data);
    const response = await Items.save();
    console.log("MenuItems Posted");
    res.status(200).json(response);
  } catch (err) {
    console.log("Error While Posting Menuitems", err);
    res.status(500).json("ServerSide Error");
  }
});

// get all menu items
router.get("/", async (req, res) => {
  try {
    const data = await MenuItems.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// parameterised menu item based on taste
router.get("/:tasteName", async (req, res) => {
  try {
    const tasty = req.params.tasteName;
    if (tasty == "sweet" || tasty== "spicy" || tasty == "sour") {
      const data = await MenuItems.find({taste:tasty});
      res.status(200).json(data)
    }
    else{
        res.status(404).json({error:'Error while finding the menuItems'})
    }
  } 
  catch (err) 
  {
   console.log(err)
   res.status(500).json({err:'Internal Server Error'})
  }
});

// comment added for testing purpose
module.exports = router;
