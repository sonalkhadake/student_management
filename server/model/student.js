const mongoose= require("mongoose");


const studentSchema= new mongoose.Schema({
    student_name:{
        type:String,
        required:true
    },
    
    student_email:{
        type:String,
        required:true
    },
   student_phone:{
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