const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()


/* const {MONGO_URI}=process.env
mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((data)=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err))
module.exports=mongoose */

const connectDB=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to MongoDB")
  }catch(error){
    console.error(error.message)
    process.exit(1)//exiting from the process with the failure code-1 to indicate something went wrong
  }
}
module.exports=connectDB


/*
(1) dotenv -> It is a node.js package that loads environment variables from a .env file into process.env.
Environment variables are used to store configuration data that our application needs to run, such as database connection strings, API keys or JWT secret keys.

(2) When we call dotenv.config() - it reads the .env file in our project's root directory and loads its content into process.env. This means we can access these variables in our code using process.env.VARIABLE_NAME.*/