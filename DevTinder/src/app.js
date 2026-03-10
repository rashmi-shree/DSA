const express = require ("express")
const app = express()
const {connectDb} = require("./config/database")
const {adminAuth} = require('./middlewares/auth')
const User = require("./models/user")

app.use(express.json())

app.post("/signup", async(req, res)=>{
    console.log(req.body)
    const user = new User(req.body)
    try{
        await user.save();
        res.send("user added successfully")
    }catch(err){
        res.status(400).send("error while saving"+ err.message)
    }
    // const userObj = {
    //     firstName:"Ms",
    //     lastName:"asf",
    //     emailId:"asd@adsf.asd",
    //     password:"asffds"
    // }
    // const user = new User(userObj)

    // await user.save();
    // res.send("user added successfully")
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









// app.use("/admin",adminAuth)
// app.get("/admin/getalldata", (req,res)=>{
//     res.send("all data sent")
// })
// app.use("/test", (req, res)=>{
//     res.send("hello")
// })
// app.get("/user1",(req,res,next)=>{
//     next()
// },
// (req,res)=>{
//     res.send("2nd response")
// })
// app.get("/user/:userid", (req, res)=>{
//     // console.log("query:", req.query);
//     console.log("query:", req.params);
    
//     res.send({firstname:"rashmi"})
// })
// app.post("/user", (req,res)=>{
//     res.send("data has been successfully saved in the db")
// })

// app.get("/getUserData", (req, res)=>{
//     try{
//         throw new Error("asfdasf")
//         res.send("user data sent")
//     }catch(err){
//         res.status(500).send("Some error contact support team")
//     }
// })

// app.use("/",(req,res)=>{
//     res.send("hello from the server")
    
// })