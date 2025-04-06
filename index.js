const express = require('express')
const app =express()
const path = require('path')

app.get("/home",(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,'templates/index.html'))
})

app.listen(8080,()=>{
    console.log("Server is running on localhost:8080")
})