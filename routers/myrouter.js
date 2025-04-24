const express = require('express')
const path = require('path')
const router = express.Router()


// router.get("/",(req,res)=>{
//     res.status(200)
//     res.type('text/html')
//     res.sendFile(path.join(__dirname,'../templates/index.html'))
// })

// router.get("/product/:id",( req,res)=>{
//     const productID =req.params.id
//     if(productID === "1"){
//         res.status(200)
//         res.type('text/html')
//         res.sendFile(path.join(__dirname,'../templates/product1.html'))
//     }else if(productID === "2"){
//         res.status(200)
//         res.type('text/html')
//         res.sendFile(path.join(__dirname,'../templates/product2.html'))
//     }else if(productID === "3"){
//         res.status(200)
//         res.type('text/html')
//         res.sendFile(path.join(__dirname,'../templates/product3.html'))
//     }else {
//         res.redirect("/")
//     }
// })



module.exports = router