const mongoose=require("mongoose")
const { Schema } = mongoose
const bookSchema = new Schema({
  title: String,
  author: String,
  year: Number,
})
const Books = mongoose.model("Books", bookSchema)
module.exports = Books