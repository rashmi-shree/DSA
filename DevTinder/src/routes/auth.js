const express = require("express")
const authRouter = express.Router();
const {validateSignUpData} = require("../utils/validator")
const User = require("../models/user")
const bcrypt = require("bcrypt")


authRouter.post("/signup", async(req, res)=>{
    try{
        validateSignUpData(req)
        const {firstName,lastName,emailId, password} = req.body
        const passwordHash= await bcrypt.hash(password, 10)
        const user = new User({
            firstName,
            lastName,
            password:passwordHash,
            emailId
        })
        await user.save();
        res.send("user added successfully")
    }catch(err){
        res.status(400).send("error while saving"+ err.message)
    }
})
authRouter.get("/login", async(req, res)=>{
    try{
        const {emailId, password} = req.body;
        const user = await User.findOne({"emailId":emailId})
        if(!user){
            throw new Error("emailid is not present")
        }
        const isPasswordValid =  await User.validatePassword(password)
        if(isPasswordValid){
            //create a jwt token
            const token = await user.getJWT();
            res.cookie("token",token)
            //add the token to the cookie and send the response back to the user
            res.send("login successful")
        }else{
            throw new Error("wrong password biatch")
        }
    }catch(err){
        res.status(400).send("something went wrong", err.message)
    }
})

module.exports = {
    authRouter
}