const router = require("express").Router();
const axios = require('axios');
const LicensePlate = require("../models/plates");


router.post("/save", async (req) =>{
    try {
      const { plates } = req.body;
      for (const plate of plates){
        const licensePlate = new LicensePlate({plateNumber : plate});
        await licensePlate.save();
      }
      
    } catch (error) {
      console.error("Upload error:", error.message);
    }
    
});

module.exports = router;