const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const dotenv=require("dotenv")
dotenv.config()

const User=require("../models/user")
const protect=require("../middlewares/authMiddlewares")

const router=express.Router()

//Register Part:

router.post("/register", async(req,res)=>{
  const {name,email,password}=req.body
  try{
    let user=await User.findOne({email})
    if(user){
      return res.status(400).json({message:"User already exists"})
  }
  user=new User({
    name,
    email,
    password:await bcrypt.hash(password,10)
  })
  //Saving new user to the database
  await user.save()

  //payload for json token
  const payload={
    id:user.id,
  }
  //signing the token
  const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:360000})
  res.status(201).json({token})
}catch(error){
  console.log(error.message)
  res.status(500).json({message:"Server Error"})
}
})

//Login Part:
router.post("/login",async(req,res)=>{
  const {email,password}=req.body
  try{
    let user=await User.findOne({email})
    if(!user){
      return res.status(400).json({message:"User not found"})
      }
      const isMatch=await bcrypt.compare(password,user.password)
      if(!isMatch){
        return res.status(400).json({message:"Invalid password"})
        }
        //payload for json token
        const payload={
          id:user.id,
          }
          //signing the token
          const token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:360000})
          res.status(200).json({token})
          }catch(error){
            console.log(error.message)
            res.status(500).json({message:"Server Error"})
            }
  })
  module.exports=router;

