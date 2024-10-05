const express=require('express')
const mongoose=require("mongoose")
const app=express()
const Product=require("./schemas/product.model")
const port=3000

app.use(express.json())

app.get('/',(req,res)=>{
  res.send('Hello World!')
})

app.post('/api/products', async(req,res)=>{
  /* const product=req.body
  res.send(`Data recieved via server: ${JSON.stringify(product)}`) */

  try{
    const product=await Product.create(req.body)
    res.status(200).json(product)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
  /* const product=req.body
  const newProduct=new Product(product) */

})
app.get('/api/products', async(req,res)=>{

  try{
    const products=await Product.find({})
    res.status(200).json(product)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
})

app.listen(port,()=>{
  console.log(`Server is running on port : http://localhost:${port}/`)
})

mongoose.connect('mongodb+srv://sd_010:v2F3Z2Ci_xZjrpd@backend.gsepvjz.mongodb.net/?retryWrites=true&w=majority&appName=Backend').then(()=>{
  console.log("Connected to MongoDB")
}).catch((error)=>{
  console.log("Failed to connect to MongoDB",error.message)
})

/* Connection string:
mongodb+srv://sd_010:<password>@backend.gsepvjz.mongodb.net/?retryWrites=true&w=majority&appName=Backend
 */