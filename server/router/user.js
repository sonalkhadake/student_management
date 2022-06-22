const express = require("express")
const router = express.Router()
const User = require("../model/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_key = "sdfghjkla@$%&";

router.post("/register", async(req,res)=>{
    try{
    let user= await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({message:"user is already exist"})
    }

    const password = req.body.password;
    const salt = bcrypt.genSaltSync(5);
    const hash = bcrypt.hashSync(password, salt);

          user = await new User({
            name:req.body.name,
            email:req.body.email,
            password:hash
         })
         user.save()
         res.json({ success: true, message:"user is created succefully", data: user})
    }
    catch(error){
        console.log(error)
        res.json({message:"internal server error"})

    }
  
})
////login route///
router.post("/login", async(req,res)=>{
    try{
        const { email, password } = req.body;
           let user= await User.findOne({email:email})
           if(!user){
            res.json({message:"please enter valid user"})
           }

           const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res
          .status(401)
          .json({ success: false, message: "incorrect Password" });
      }
      const payload = {
        user: {
          id: user._id,
        },
      };
      const authtoken = jwt.sign(payload, jwt_key);

      res.json({success:true,
        message: "Token created succesfully",
        data: authtoken,
      });
      console.log(authtoken);
    }
    catch(error){
        console.log(error)
        res.json({message:"internal server error"})

    }
})









module.exports = router