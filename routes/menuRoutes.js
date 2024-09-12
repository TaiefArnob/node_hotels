const express = require("express");
const router = express.Router();
const MenuItem = require("../models/Menu");

//Post method For saving Menu Item

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Get method to display the menu items

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Data Fetched Succesfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (
      tasteType === "Sweet" ||
      tasteType === "Spicy" ||
      tasteType === "Sour"
    ) {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("Response Fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Updateing the existing Data

router.put("/:id", async (req, res) => {
  try {
    const menuID = req.params.id;
    const updatedMenuData = req.body;

    const response = await MenuItem.findByIdAndUpdate(menuID, updatedMenuData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "Item not found" });
    }

    console.log("Data Updated!");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Deleting the existing data

router.delete('/:id',async(req,res)=>{
  try{
      const menuID=req.params.id;
      const response=await MenuItem.findByIdAndDelete(menuID);
      if(!response){
        return res.status(404).json({error:'Item not found'})
      }
      console.log('Data Deleted');
      res.status(200).json({message:'Item Deleted Succesfully'});
  }catch(err){
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  } 
})


module.exports = router;


