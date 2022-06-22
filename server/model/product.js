const mongoose= require("mongoose");


const ProductSchema= new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true,
        unique:true
    },
    quantity:{
        type:Number,
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
const Product= mongoose.model("product", ProductSchema);
module.exports=Product;