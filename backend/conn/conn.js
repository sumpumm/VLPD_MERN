const mongoose = require("mongoose");

const conn = async (req,res)=>  {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@vlpd.1d7qqdo.mongodb.net/");
        console.log("Mongoose connected");
    } catch (error) {
        console.error("MongoDb connection failed: ",error);
    }
};

conn();