const express=require('express')
const app=express()

const port=5000

app.get('/user',(req,res)=>{
  const userId=req.query.id
  res.send(`User ID: ${userId}`)
})

app.listen(port,(err)=>{
  if(!err){
    console.log(`Server running on port: http://localhost:${port}/`)
  }
})

/* 
(1) search/query parameter : ?id=123 -> query

(2) In "GET" request we use: req.query
    In "POST" request we use: req.body
*/