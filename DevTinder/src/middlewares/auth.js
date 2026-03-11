const jwt = require("jsonwebtoken")
const User = require("../models/user")

//middleware
const adminAuth = (req, res, next) =>{
 console.log("admin gets checked for all admin routes");
    const token = "xyz"
    const isAdminAuthorized = "xyz" 
    if(token === isAdminAuthorized){
        next()
    }else{
        res.status(401).send("Unauthorized user")
    }
}

const userAuth =async (req, res, next)=>{
    try{
        const token = req.cookies
        if(!token){
            throw new Error("token not valid")
        }
        const decodedObj = await jwt.verify(token, "DEV@Tinder$123")
    
        const {_id} = decodedObj
    
        const user = await User.findById(_id);
        if(!user){
            throw new Error("user not found")
        }
        req.user = user
        next()
    }
    catch(err){
        res.status(400).send("something went wrong", err.message)
    }
}

module.exports = {
    adminAuth,
    userAuth
}