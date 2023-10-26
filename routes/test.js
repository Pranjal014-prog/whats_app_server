import express from 'express';
import TestSchema from '../models/test.js';
const Test=express.Router();
Test.get("/test", async(req,res)=>{
    try{
        const finding=await TestSchema.find({});
        console.log(finding);
        // console.log(res.status(200).json({message:finding}));
        return res.status(200).json({message:finding});
    }catch(error){
        return res.status(500).json({error:"Error while finding Entries"});
    }
})
export default Test;