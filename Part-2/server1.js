const express=require('express')
const app=express()
const port=3000

app.use(express.json()) // for middleware

app.get('/',(req,res)=>{
  res.send('Hello World')
})
app.get('/about',(req,res)=>{
  res.send('About Page')
})

app.post('/submit',(req,res)=>{
  /* console.log(req.body) */
  const data=req.body //request sending to the server
  res.send(`Data retrieved : ${JSON.stringify(data)}`)
})

app.listen(port,(err)=>{
  if(!err){
    console.log(`Server running on port: http://localhost:${port}/`)
  }
})



/* When you are sending a data, stringify properly, and when recieving data make sure it is parsed properly. */