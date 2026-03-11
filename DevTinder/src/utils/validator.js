const validator = require("validator")

const validateSignUpData = (req) => {
    const {firstName, emailId} = req.body
    if(!firstName){
        throw new Error("enter first name")
    }else if (!validator.isEmail(emailId)){
        throw new Error("enter email")
    }
}

module.exports = {
    validateSignUpData
}