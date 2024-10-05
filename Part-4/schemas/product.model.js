const mongoose=require("mongoose")
const { Schema } = mongoose
/* const userSchema = mongoose.Schema({}) */
const productSchema = new Schema({
  name: {
    type: String,
    required: [true,"Please enter the product name"]
  },
  quantity:{
    type:Number,
    required:true,
    default:0
  },
  price:{
    type:Number,
    required:true,
    default:0
  },
  image:{
    type:String,
    required:false
  }
},
//default fields:
{
  timestamps:true //time when the product get added
})

/* const product=mongoose.model("Product",productSchema) 
module.exports=product */
module.exports = mongoose.model("Product",productSchema) //(keyname,schema)
