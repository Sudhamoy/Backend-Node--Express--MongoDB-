const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  comment:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Comment"
    }
  ]
})
const Post=mongoose.model("Post",postSchema)
module.exports=Post;