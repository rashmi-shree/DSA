const express =require("express")
const { userAuth } = require("../middlewares/auth")
const profileRouter = express.Router()
// const User = require("./models/user") 
profileRouter.get("/profile",userAuth, async(req, res)=>{
    try{
        const cookies = req.cookies
        const {token} = cookies
        const decodedMessage = await jwt.verify(token, "DEV@Tinder$123")
        const {_id} = decodedMessage;
        const user = req.user
        res.send(user)
    }catch(err){
        res.status(400).send("something went wrong", err.message)
    }
})

module.exports = {
    profileRouter
}