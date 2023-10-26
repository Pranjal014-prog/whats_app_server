import mongoose from "mongoose";
const Test= new mongoose.Schema({
    name:String,
    email:String
});
const TestSchema = mongoose.model('Test',Test);

export default TestSchema;