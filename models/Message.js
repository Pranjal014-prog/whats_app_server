import mongoose from "mongoose";
const MessageSchema=new mongoose.Schema({
    conversationId:{
        type:String
    },
    senderName:{
        type:String
    },
    receiverName:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }
},
  {
    timestamps:true
  }
);
const Message=mongoose.model('message',MessageSchema);
export default Message;