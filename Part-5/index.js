const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const userRoutes=require("./routes/userRoutes")

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://deysudhamoy00:4crf8ALA2bQu4ey9@mongooseschema.d3hwnfl.mongodb.net/?retryWrites=true&w=majority&appName=MongooseSchema")

mongoose.connection.on("connected",()=>{
  console.log("Connected to MongoDB")
})

const port=5000

app.use("/api",userRoutes)

app.listen(port,(error)=>{

  if(!error){
  console.log(`Server is running on port : http://localhost:${port}/`)
  }
  else{
    console.log(error.message)
  }
})