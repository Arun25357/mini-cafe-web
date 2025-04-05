const express = require('express');
const app =express();

app.use((req,res)=>{
    res.send("<h1>Hello from express</h1>")

})

app.listen(8080,()=>{
    console.log("Server is running on localhost:8080")
})