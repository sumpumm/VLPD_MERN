const router = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");

router.post("/register", async(req,res)=>{
    try {
        const {email,username,password} = req.body; // destructuring bhanxa; basically extracts the specified properties from the request body and stores them in their own variables
        const hashed_password = bcrypt.hashSync(password);
        const user = new User({email,username,password: hashed_password});
        await user.save().then(()=>{
            res.status(200).json({message : "User registered successfully"});
        });
    } catch (error) {
        res.status(200).json({message : "User already exists"});
    }
});

router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(200).json({message : "Please Sign Up first"});  
        }
        const is_password=bcrypt.compareSync(req.body.password,user.password); 
        if(!is_password){
            return res.status(200).json({message : "Invalid password"});  
        }  
        const {password, ...others}= user._doc; // user ko password bahek sab information mageko
        return res.status(200).json({others});
    } catch (error) {
        return res.status(200).json({message : "Error"});
    }

});
module.exports = router;