const express = require("express")
const router = express.Router()
const Product= require("../model/product")


/////get all student///
router.get("/getproduct", async(req,res)=>{
    try {
    const product = await Product.find();
    res.json(product)
} catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
}

})



////create student///
router.post("/product", async(req,res)=>{
    try {
        const {product_name, brand, quantity} = req.body;

       
        const product = new Product({
            product_name, 
            brand, 
            quantity
            
        })
        const newproduct = await product.save()

        res.json(newproduct)

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router










module.exports=router