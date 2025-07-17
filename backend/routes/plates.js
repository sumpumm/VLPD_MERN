const router = require("express").Router();
const LicensePlate = require("../models/plates");

router.get("/plates",async(req,res)=>{
    try {
        const plates = await LicensePlate.find(); // fetch all documents
        res.json(plates); // return as JSON
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch license plates" });
      }
});
module.exports = router;