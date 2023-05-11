const express = require('express')
const fs = require('fs')

const PORT = 8081

const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('First response from express  !!')
})

app.get('/todos',(req,res)=>{
    fs.readFile('./db.js','utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }
        res.status(200).json(
            JSON.parse(data)
        )
        
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})