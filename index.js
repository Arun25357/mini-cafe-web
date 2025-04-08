const express = require('express')
const app =express()

const router = require('./routers/myrouter')
app.use(router)

app.listen(8080,()=>{
    console.log("Server is running on localhost:8080")
})