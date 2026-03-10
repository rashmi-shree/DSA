const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:String
    },
    gender:{
        type:String
    },
    photoUrl:{
        type:String,
        default:""
    },
    about:{
        type:String,
        default:"this is default about"
    },
    skills:{
        type:[String]
    }
}, { timestamps: true })

const userModel = mongoose.model("user", userSchema)
module.exports = userModel