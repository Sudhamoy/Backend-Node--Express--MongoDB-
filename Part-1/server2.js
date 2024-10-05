const express=require('express') //object
const app=express() //instance

const port=3001

//Returning a message from server
app.get("/",(req,res)=>{ // "/"-> home route and "callback fn->controller fn"
  res.send("Hi! Learn Express.Js") //returning response from the server
})

app.listen(port,()=>{
    console.log(`Server running on port: http://localhost:${port}/`)
    }
)


/* app.listen(port,(err)=>{ //err-> silent parameter
  if(err){
  console.log(err)
  }else{
    console.log(`Server running on port: http://localhost:${port}/`)
    }
) */

    /*
    Globally:
    npm install -g nodemon
    Then use: nodemon server2.js
    Now: npx nodemon server2.js */