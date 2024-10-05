const express=require('express')
const app=express()

const port=3000

//middleware
app.use(express.json()) //parsed

app.get('/',(req,res)=>{
  res.send("Hello client")
})

app.listen(port,()=>{
  console.log(`Server is running on port : http://localhost:${port}/`)
})

app.post('/post',(req,res)=>{
  const data = req.body
  res.send(`Data retrieved : ${JSON.stringify(data)}`)
})