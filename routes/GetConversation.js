import express from 'express';
import Conversation from '../models/Conversation.js';
const GetConversation=express.Router();
GetConversation.post("/conversation/get",async(req,res)=>{
   try{
    const senderName=req.body.senderName;
    const receiverName=req.body.receiverName;
    let conv=await Conversation.findOne({members: {$all: [receiverName,senderName]}});
    console.log("pranjal Goyal make some noise",conv);
    return res.status(200).json(conv);
   }catch(error){
     return res.status(500).json(error.message);
   }
})
export default GetConversation;