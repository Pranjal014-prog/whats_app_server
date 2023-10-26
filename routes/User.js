import express from 'express';
import LoginSchema from '../models/LoginSchema.js';
const User=express.Router();
User.get("/data", async(req,res)=>{
    try{
        const finding=await LoginSchema.find({});
        // console.log(finding);
        // console.log(res.status(200).json({message:finding}));
        return res.status(200).json({message:finding});
    }catch(error){
        return res.status(500).json({error:"Error while finding Entries"});
    }
})
export default User;