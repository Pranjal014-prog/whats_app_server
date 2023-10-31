import mongoose from "mongoose";
const Login= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    img:String
});
const LoginSchema = mongoose.model('Image',Login);

export default LoginSchema;