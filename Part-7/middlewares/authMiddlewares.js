const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config()
const User=require("../models/user")

//Define the protect middleware function to protect routes that require authentication:
const protect=async(req,res,next)=>{
  let token
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
    try{
      token=req.headers.authorization.split(" ")[1]
      console.log(token)
      const decoded=jwt.verify(token,process.env.JWT_SECRET)
      req.user=await User.findById(decoded.id).select("-password")
      next()
      }catch(err){
        console.log(err)
        res.status(401).json({err:"Please log in to access this route, token failed!"})
      }
    }else if(req.cookies.jwt){
      token=req.cookies.jwt
    }
    if(!token){
      res.status(401).json({err:"Not authorized, token failed!"})
    }
}
module.exports=protect
  /* try{
    const token=req.header("Authorization").replace("Bearer ","")
    const decoded=jwt.verify(token,process.env.SECRET_KEY)
    req.user=await User.findById(decoded.id).select("-password")
    next()
    }catch(err){
      res.status(401).send({error:"Please authenticate"})
    } */

/* When we request something , token will get created and this token is generated from the backend side. */