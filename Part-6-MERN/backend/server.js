const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
const bookRoutes=require("./routes/books")

const app=express()
const port=5000

//Middlewares : to communicate from client to server
app.use(bodyParser.json())
app.use(cors())

//Connect to server - mongoDB
mongoose.connect("mongodb+srv://deysudhamoy00:118QvqIdsZlS9oqU@mernapp2.maeavan.mongodb.net/?retryWrites=true&w=majority&appName=mernapp2")

mongoose.connection.on("connected",()=>{
  console.log("Connected to MERN APP MongoDB - BookList API")
})

app.use("/books",bookRoutes)

app.listen(port,(err)=>{
  if(!err){
    console.log(`Server is running on port : http://localhost:${port}/`)
  }
})

//118QvqIdsZlS9oqU