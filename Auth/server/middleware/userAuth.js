const jwt = require("jsonwebtoken")

const validateUser = (req,res,next) =>{
    try {
        const accessToken = req.cookies.accessToken;
        if(!accessToken){
            return res.status(401).json({success:false,message:"You are not authenticated."})
        }

        const validUser =  jwt.verify(process.env.JWT_ACCESS_SECRET)
        if(!validUser){
            return res.status(401).json({message:"You r not verified."})
            }
        console.log("Valid User:",validUser)                                         
        req.user = validUser
        next()
    } catch (error) {
        res.status(400).json({success:false,message:error})
    }
}

module.exports = validateUser