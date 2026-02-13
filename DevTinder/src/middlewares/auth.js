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

module.exports = {
    adminAuth
}