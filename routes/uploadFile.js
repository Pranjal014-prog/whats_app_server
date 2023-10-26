import express from 'express'
import upload from '../utils/upload.js';
const UploadFile=express.Router();
const url="http://localhost:5000"
UploadFile.post("/file/upload",upload.single("file"),(req,res)=>{
   console.log("NEW VERSION BETA")
   console.log(req.file);
   if(!req.file){
    return res.status(404).json("file Not found");
   }
   const imageurl=`${url}/file/${req.file.filename}`;
   console.log(imageurl);
   return res.status(200).json(imageurl);
})
export default UploadFile;