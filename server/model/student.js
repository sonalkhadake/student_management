const mongoose= require("mongoose");


const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})
const Student= mongoose.model("student", studentSchema);
module.exports=Student;