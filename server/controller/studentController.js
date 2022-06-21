const Student = require("../model/student")
////////get all student////

const getAllstudent = async (req,res)=>{
    try {
        const student = await Student.find();
        res.json(student)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


/////create student data///
const addstudent = async (req,res)=>{
    try {
        const {name, email, phone, subject  } = req.body;

       
        const  student= new Student({
          name,
          email, 
          phone,
          subject
            
        })
        const addstudent = await student.save()

        res.json(addstudent)

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports ={
    getAllstudent,
    addstudent
}