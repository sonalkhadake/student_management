const express = require("express")
const router = express.Router()
const Student= require("../model/student")


/////get all student///
router.get("/getstudent", async(req,res)=>{
    try {
    const student = await Student.find();
    res.json(student)
} catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
}

})



////create student///
router.post("/student", async(req,res)=>{
    try {
        const {student_name, student_email, student_phone, subject} = req.body;

       
        const student = new Student({
            student_name, 
            student_email, 
            student_phone,
          subject
            
        })
        const newstudent = await student.save()

        res.json(newstudent)

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router










module.exports=router