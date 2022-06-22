
const express= require("express");
const mongoose=require("mongoose");
const PORT= process.env.PORT || 5000
const app = express();
var cors = require('cors')




////middleware/////
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));




/////routes//
app.use("/api", require("./router/user"))
app.use("/api", require("./router/student"))
app.use("/api", require("./router/product"))





mongoose.connect("mongodb+srv://sonalikhadake:O3gPOFmBo0a2gYZw@cluster0.kqqguhg.mongodb.net/?retryWrites=true&w=majority").then(data=>{
    console.log("your server is connected to the database")
}).catch(err=>{
    console.log("connection is fails")
})

app.listen(PORT,()=>{
    console.log("your server is running at port"+PORT)
})