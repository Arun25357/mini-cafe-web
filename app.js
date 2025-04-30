const express = require('express')
const path = require('path')
const router = require('./routers/myrouter.js')
const app =express()

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(router)
app.use(express.static(path.join(__dirname,'public')))

app.listen(8080,()=>{
    console.log("Server is running on localhost:8080")
})

