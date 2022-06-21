const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const userController = require("../controller/userController")
const userValidation= require("../middleware/userValidation")


router.post("/signUp", (req,res)=>{
    userValidation.userValidatesignUp, userController.signUp
})
router.post("/signIn", (req,res)=>{userValidation.userValidatesignIn, userController.signIn})
router.get("/getUser", auth, (req,res)=>{ userController.getUser})






module.exports = router