import express from 'express';
import Message from '../models/Message.js';
import Conversation from '../models/Conversation.js';
const AddMessage=express.Router();
AddMessage.post('/message/add',async(req,res)=>{
   try{
    const newMessage=new Message(req.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text})
    return res.status(200).json("message successfully sent");
   }catch(error){
    return res.status(500).json(error.message);
   }
})
export default AddMessage;