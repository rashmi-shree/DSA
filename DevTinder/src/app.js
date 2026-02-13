const express = require ("express")

const app = express()

app.use("/test", (req, res)=>{
    res.send("hello")
})
app.get("/user1",(req,res,next)=>{
    next()
},
(req,res)=>{
    res.send("2nd response")
})
app.get("/user/:userid", (req, res)=>{
    // console.log("query:", req.query);
    console.log("query:", req.params);
    
    res.send({firstname:"rashmi"})
})
app.post("/user", (req,res)=>{
    res.send("data has been successfully saved in the db")
})
app.use((req,res)=>{
    res.send("hello from the server")
    
})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
    
});