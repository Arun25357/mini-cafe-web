const express = require('express')
const app =express()
const path = require('path')

const indexpage = path.join(__dirname,'templates/index.html')

app.get("/home",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(indexpage)
})

app.listen(8080,()=>{
    console.log("Server is running on localhost:8080")
})