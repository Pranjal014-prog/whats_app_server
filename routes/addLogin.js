import express from 'express'
import upload from '../utils/upload.js';
const AddLogin=express.Router();
const url="http://localhost:5000"
AddLogin.post("/register",upload.single("file"),(req,res)=>{
   console.log(req.file);
   if(!req.file){
    return res.status(404).json("file Not found");
   }
   const obj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    imageurl:`${url}/image/${req.file.filename}`
}
   return res.status(200).json(obj);
})
export default AddLogin;