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

//schema methods
userSchema.methods.getJWT = async function(){
    const user = this;

    const token = await JsonWebTokenError.sign({_id: user._id}, "DEV@Tinder$123", {
        expiresIn:"1d"
    })
    return token;
}
userSchema.methods.validatePassword = async function(passwordInputByUser){
    const user = this;
    const passwordHash = user.password;

    const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordHash)
    return isPasswordValid
}
const userModel = mongoose.model("user", userSchema)
module.exports = userModel