const express=require('express')
const app=express()

const port=5001

//middleware function
const logger=(req,res,next)=>{
  console.log(`${req.method} ${req.url}`)
  next()
}

//For using middleware:(use logger middleware)
app.use(logger)

//Authentication Middleware:
const authenticate=(req,res,next)=>{
  const {user} =req.query
  if(user === "admin"){
    next()
    }else{
      res.status(403).send("Forbidden")
      /* res.redirect('/login') */
      }
}

app.get("/secure",authenticate,(req,res)=>{
  res.send("Welcome to secure page")
})
app.get("/",(req,res)=>{
  res.send("Welcome to home page")
})
app.get("/about",(req,res)=>{
  res.send("Welcome to about page")
})

app.listen(port,(err)=>{
  if(!err){
    console.log(`Server running on port: http://localhost:${port}/`)
  }
})

/* 
(1) method: get/post.....
(2) next() -> predefined function to pass the control of middleware to the next/another middleware

(3) http://localhost:5001/secure?user=admin (the search parameter for authenticate middleware)


(4) [nodemon] starting `node server3.js`
Server running on port: http://localhost:5001/
GET /
GET /favicon.ico
GET /secure
GET /about
GET /dwd
GET /secure
GET /secure?user=admin 

Logger part*/