const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const postRoute=require("./routes/Post")
const commentRoute=require("./routes/Comment")

const app=express()

app.use(bodyParser.json())

app.use('/posts',postRoute)
app.use("./posts:id/comment",commentRoute)

mongoose.connect("mongodb+srv://deysudhamoy00:qoVoJUUswMZkgJG2@restapi1.o2la3.mongodb.net/?retryWrites=true&w=majority&appName=RESTAPI1")

