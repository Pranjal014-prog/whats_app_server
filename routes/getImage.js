import express from "express";
import grid from 'gridfs-stream';
import mongoose from "mongoose";
const url="http://localhost:5000"
let gfs,GridFSBucket;
const conn=mongoose.connection;
conn.once('open',()=>{
    GridFSBucket=new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName: 'fs'
    });
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection(`fs`);
})
const GetImage=express.Router();
GetImage.get("/file/:filename",async(req,res)=>{
    try{
        const file=await gfs.files.findOne({filename:req.params.filename});
        const readStream=GridFSBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    }catch(error){
        return res.status(500).json(error.message);
    }
});
export default GetImage;