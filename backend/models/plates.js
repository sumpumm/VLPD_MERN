const mongoose = require("mongoose");

const licensePlateSchema = new mongoose.Schema({
    plateNumber:{
        type: String,
        required: true, 
    },
    recordedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model("LicensePlate",licensePlateSchema);
