const router = require("express").Router();
const axios = require('axios');
const LicensePlate = require("../models/plates");

const multer = require("multer");
const users = require("../models/users");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() 
      cb(null,uniqueSuffix+file.originalname)
    }
  })
const upload = multer({storage : storage });

router.post("/upload",upload.single('file'), async (req,res) =>{
    try {
      const filePath = `http://localhost:1000/uploads/${req.file.filename}`;
      const response= await axios.post("http://127.0.0.1:8000/api/detect",{filePath: filePath, fileName: req.file.filename });
      const plates = response.data.result;
      for (const plate of plates){
        const licensePlate = new LicensePlate({plateNumber : plate});
        await licensePlate.save();
      }
      res.json({file_name: req.file.filename, message : "File Uploaded successfully"});
      
    } catch (error) {
      console.error("Upload error:", error.message);
    }
    
});

module.exports = router;