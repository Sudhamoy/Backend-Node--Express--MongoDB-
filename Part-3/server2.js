const express=require('express')
const path=require('path')

const app=express()
/* const port=process.env.PORT || 3000 */
const port=3002

//set the view engine to ejs:
app.set('view engine','ejs')

//set the views folder:(where ejs template are located)
app.set('views',path.join(__dirname,'views'))

//to set up the route
app.get('/',(req,res)=>{
  const data={
    title:"Welcome to EJS",
    msg:"EJS is running..."
  }
  res.render('index',data)
})

//to run the server
app.listen(port,()=>{
  console.log(`Server is running on port : http://localhost:${port}/`)
})

/* Node.Js has a capability to render the html page in the backend. Thats why this index.ejs html file is rendering in backend */