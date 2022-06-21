const User = require("../model/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_key = "sdfghjkla@$%&";


////////signUp route///////
const signUp = async (req,res)=>{
    try {
     
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res
            .status(400)
            .json({ success: false, message: "the user is already exist" });
        }
        const password = req.body.password;
        const salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt);
  
        user = await new User({
          name: req.body.name,
          email: req.body.email,
          password: hash,
        });
        user.save();
        //   console.log(req.body);
        if(user){
           
           return res.json({  message:"user is created successfully", user}) 
         }
      
      } catch (error) {
        console.log(error);
        res.status(500).send("internal server error");
      }
}


/////////signIn route////
const signIn = async (req,res)=>{
    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email: email,
      });
      if (!user) {
        return res
          .status(200)
          .json({ success: false, message: "Please enter registered email" });
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

      res.json({
        success:true,
        message: "Token created succesfully",
        data: authtoken,
      });
      console.log(authtoken);
    } catch (error) {
      console.log(error);
      res.status(500).send("internal server error");
    }

}

//////getuser/////
const getUser= async (req,res)=>{
    try {
        const user_id = req.user.id;
        const user = await User.findById(user_id);
        res.json({ message: "success", data: user });
      } catch (error) {
        console.error(error);
        res.status(500).send("internal server error");
      }
}


module.exports ={
    signUp,
    signIn,
    getUser
}

