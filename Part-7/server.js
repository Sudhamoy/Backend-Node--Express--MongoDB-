/*
npm i dotenv //api key
npm i bcryptjs //for hashing
npm i jsonwebtoken //for passing the token
*/

const express=require("express")
const app=express()

const dotenv=require("dotenv")
dotenv.config()

const connectDB=require("./config/db")
connectDB()

const authRoutes=require("./routes/authRoute")

app.use(express.json())
app.use("/api/auth",authRoutes)

const port=process.env.PORT || 5000

app.listen(port,(err)=>{
  if(!err){
    console.log(`Server is running on port : http://localhost:${port}/`)
  }
  else{
    console.log(err)
  }
})