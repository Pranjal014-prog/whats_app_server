import express from "express";
import grid from 'gridfs-stream';
import mongoose from "mongoose";
const url="http://localhost:5000"
let gfs,GridFSBucket;
const conn=mongoose.connection;
conn.once('open',()=>{
    GridFSBucket=new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName: 'photos'
    });
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection(`photos`);
})
const GetLogin=express.Router();
GetLogin.get("/image/:filename",async(req,res)=>{
    try{
        const file=await gfs.collection('photos').findOne({filename:req.params.filename});
        const readStream=GridFSBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    }catch(error){
        return res.status(500).json(error.message);
    }
});
export default GetLogin;