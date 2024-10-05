const express=require('express')
const app=express()

const port=3000

//routing params
app.get('/user/:id',(req,res)=>{
  const userId=req.params.id
  res.send(`Hello!, ${userId}`)
})

//multiple routing params
app.get('/user/:userId/post/:postId',(req,res)=>{
  const userId=req.params.userId
  const postId=req.params.postId
  res.send(`Hello!, user-id:${userId}, post-id:${postId}`)
})

app.listen(port,()=>{
  console.log(`Server is running on port : http://localhost:${port}/`)
})