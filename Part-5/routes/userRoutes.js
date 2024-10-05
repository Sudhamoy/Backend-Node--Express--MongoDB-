const express=require("express")
const router=express.Router()
const User=require("../models/User")

//Route to create new user:
router.post("/users",async(req,res)=>{
  const {name,email,age}=req.body //destructing to send the body to the server from frontend(sending name,email,age to the server while we submit a form like that.)
  try{
    const newUser=new User({
      name,
      email,
      age
    })
    await newUser.save()
    res.status(201).send(newUser) //.json(newUser)
    }catch(err){
      res.status(400).send({message:err.message})
      }
  })

router.get("/users",async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
    } catch (err) {
      res.status(400).send({ message: err.message });
      }
  })

router.put("/users/:id", async (req, res) => {
    try {
      const id = req.params.id; // const {id}=req.params
      const { name, email, age } = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, { name, email, age }, { new:true, runValidators:true });
      if(!updatedUser){
        res.status(404).send({message:"User not found"})
      }
        res.status(200).send(updatedUser);
        } catch (err) {
          res.status(400).send({ message: err.message });
          }
          }
  
)

  module.exports=router; //exporting the router to use it in the main file.  //