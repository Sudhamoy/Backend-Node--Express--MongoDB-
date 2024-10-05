//How to return a file from server:

const express=require('express')
const app=express()

const port=5000

app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/index.html")//return file
})

app.listen(port,(err)=>{
  if(err){
    console.log(err)
    }else{
      console.log(`Server running on port: http://localhost:${port}/`)
      }
  })

  /*
  In backend we cannot work with relative paths (like -> ./index.html) 
  Paths must be absolute using -> __dirname*/

  /* We can modify the contents dynamically. For that we have to use template engine, view EJS engine */