const express = require ("express")
const app = express()
const {connectDb} = require("./config/database")
const {adminAuth} = require('./middlewares/auth')
const User = require("./models/user")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const {userAuth} = require("./middlewares/auth")
app.use(express.json())
app.use(cookieParser())


const {authRouter} = require("./routes/auth")
const {profileRouter} = require("./routes/profile")
const {requestRouter} = require("./routes/requests")

app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)

// get user by email
app.get("/user",userAuth,  async (req, res)=>{
    try{
        const user = await User.find({emailId:req.body.emailId})
        res.send(user)
    }catch(err){
        res.status(400).send("something went wrong")
    }
})

//get all users from the database 
app.get("/feed", async(req, res)=>{
    try {
        const users = await User.find({})
        res.send(users)
    }
    catch(err){
        res.status(400).send("something went wrong", err.message)
    }
})
//delete user
app.delete("/user", async(req, res)=>{
    try{
        // const user = await User.findByIdAndDelete(req.body.userId)

        const user = await User.findOneAndDelete({ _id: req.body.userId })
        res.send({
            message: "user deleted successfully",
            user
            })
    }catch(err){
        res.status(400).send("something went wrong", err.message)
    }
})

//update user
app.patch('/user/:userId', async(req, res)=>{
    const userId = req.params?.userId;
    const data = req.body
    
    try{
        const ALLOWED_UPDATES = ['photoUrl', 'about', 'gender', 'age']
    const isUpdateAllowed = Object.keys(data).every((k)=>
    ALLOWED_UPDATES.includes(k))
    if(!isUpdateAllowed){
        throw new Error ("update not allowed")
    }
    if(data.skills > 10){
        throw new Error("skills cannot be more than 10 ")
    }
        await User.findByIdAndUpdate({_id:data}, data)
        res.send("user updated success")
    }catch(err){
        res.status(400).send("something went wrong")
    }
})

connectDb()
.then(()=>{
    console.log("database connection established");
    app.listen(3000, ()=>{
        console.log("server is successfully listening on 3000");
    })
})
.catch((err)=>{
    console.error("database cannot be connected");
})