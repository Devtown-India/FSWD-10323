const express = require('express')

const PORT = 8081

const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('First response from express  !!')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})