import express, { response } from 'express';
import Conversation from '../models/Conversation.js';
const ConversationRoute = express.Router();
ConversationRoute.post("/conversation/add",async(req,res)=>{
    try{
        const senderName=req.body.senderName;
        const receiverName=req.body.receiverName;
        const exist= await Conversation.findOne({members: {$all: [receiverName,senderName]}});
        if(exist){
            return res.status(200).json("conversation already exist");
        }
        const newConversation=new Conversation({
            members:[senderName,receiverName]
        })
        await newConversation.save();
        return res.status(200).json("conversation saved successfully");
    }catch(error){
        return res.status(500).json(error.message);
    }
})
export default ConversationRoute;
