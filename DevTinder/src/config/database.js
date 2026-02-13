const mongoose = require("mongoose")

const connectDb = async() =>{
    await mongoose.connect("mongodb+srv://NamasteNode:NamasteNode@namastenode.oivweuh.mongodb.net/devTinder")
}

module.exports = {connectDb}