
const express= require("express");
const mongoose=require("mongoose");
const PORT= process.env.PORT || 7000
const app = express();
var cors = require('cors')
const signUp= require("./router/user")
const signIn= require("./router/user")
const getUser= require("./router/user")
const user = require("./router/user")



////middleware/////
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));


////////user////
app.use("/api",signUp )
app.use("/api",signIn)
app.use("/api",getUser )
app.use("/api", user)



// app.post("/api",(req,res)=>{
//     res.send("hellow world")
// })

/////////database connection
mongoose.connect("mongodb+srv://sonalikhadake:O3gPOFmBo0a2gYZw@cluster0.kqqguhg.mongodb.net/?retryWrites=true&w=majority").then(data=>{
    console.log("your server is connected to the database")
}).catch(err=>{
    console.log("connection is fails")
})

app.listen(PORT,()=>{
    console.log("your server is running at port"+PORT)
})
