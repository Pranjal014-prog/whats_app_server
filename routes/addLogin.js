import express from 'express'
import upload from '../utils/upload.js';
import LoginSchema from '../models/LoginSchema.js';
const AddLogin=express.Router();
const url="http://localhost:5000"
AddLogin.post("/register",upload.single("file"),async(req,res)=>{
   console.log(req.file);
   if(!req.file){
    return res.status(404).json("file Not found");
   }
   const obj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    img:`${url}/image/${req.file.filename}`
   }
   try{
      const savedImage=new LoginSchema(obj);
      await savedImage.save();
      return res.status(200).json('Images uploaded and associated with the group');
   }catch(error){
      return res.status(500).json({ error: 'Server error' });
   }
   
})
export default AddLogin;