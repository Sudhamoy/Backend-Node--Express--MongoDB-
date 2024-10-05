const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

const { Schema } = mongoose;
const userSchema = new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
})

//pre-save middleware: to hash the password before saving the user document.
//Encrypt password before saving the user:
userSchema.pre("save",async function(next){
  if(this.isModified("password")){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next()
    /* this.password=await bcrypt.hash(this.password,12) */
    }
  else{
    next()
  }
})

//define a method to compare the entered password with the hashed password stored in the database:
userSchema.methods.matchPassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
  }
  //alternative : methods.comparePassword

  module.exports=mongoose.model("User",userSchema) //export the user model.

/*

(1) bcrypt: It is a password hashing function designed for a secured password storage. When we create a account in a website, the password we put should not be stored in a form of plain text, instead should get stored in a form hashed version using bcrypt.

(2) Hashing : When we create a password, bcrypt converts it into a fixed-length string of characters(called hash) that doesn't resemble the original password.

(3) Salting: brcrpt adds a random string of characters (called salt) to our password before hashing it. That ensures that if two users have same password, there hashed part should be different.

(4) Comparison: When we log in, bcrypt hasehs the password we enter and compare it to the stored hash. If they match, login is successful.*/