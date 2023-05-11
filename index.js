const express = require('express')

const PORT = 8081

const app = express()

app.get('/',(req,res)=>{
    console.log(req.headers)
    console.log(req.path)

    console.log('Hello World')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})