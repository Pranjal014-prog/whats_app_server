import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DBconnection= async()=>{
    const MONGO_URL=process.env.MONGODB_URL;
    try{
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            w: 'majority', // Use 'majority' as the write concern
          });
        console.log("DB connected Successfully");
    }catch{
        // console.log(`${error}`)
        console.log("error while connecting");
    }
}
export default DBconnection;
// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();
// const DBConnection=async ()=>{
//  const MONGO_URI=process.env.MONGODB_URL;
//  try {
//     await mongoose.connect(MONGO_URI,{useNewUrlParser:true});
//     console.log("DB is connected Successfully");
//  } catch (error) {
//     console.log("error while connecting to mongoDB",error.message);
//  }
// };
// export default DBConnection;
