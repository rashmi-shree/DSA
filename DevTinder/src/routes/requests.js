const express = require("express")
// const User = require("./models/user")
const requestRouter = express.Router();
const {userAuth} = require("../middlewares/auth")
requestRouter.post("/sendConnectionRequest",userAuth, async(req, res)=>{
    try{
        console.log("sending a connection request")
        res.send("connection req sent")
    }
    catch(err){
        res.status(400).send("error", err.message)
    }
})

module.exports = {
    requestRouter
}