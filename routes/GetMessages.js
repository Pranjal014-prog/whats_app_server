import express from 'express';
import Message from '../models/Message.js';
const GetMessages=express.Router();
GetMessages.get("/message/get/:id",async(req,res)=>{
    try{
        const messages=await Message.find({conversationId: req.params.id});
        return res.status(200).json(messages);
    }catch(error){
        return res.status(500).json(error.message);
    }
})
export default GetMessages;