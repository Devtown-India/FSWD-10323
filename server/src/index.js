import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import logger,{morganMiddleware} from './logger'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth'
import postRoutes from './routes/post'
import commentRoutes from './routes/comment'
import { connectDB } from './utils/db.utils'
import jwt from 'jsonwebtoken'


const app = express()
const PORT = process.env.PORT || 8080

connectDB()

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))
app.use(express.json())
app.use(cookieParser())
app.use(morganMiddleware)

app.post('/login',(req,res)=>{
    const {email,password} = req.body
    const token = jwt.sign({email,password},process.env.JWT_SECRET,{
        expiresIn: '30s'
    })
    return res
    .status(200)
    .json({
      message: "User signin success",
      token: token,
      user:{
            email:email,
            id:'sdfsadfasd2134'
      }
    });
})

app.get('/validateToken/:token',(req,res)=>{
    const {token} = req.params
    if(!token){
        return res.status(401).json({message:'No token found'})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        return res.status(200).json({message:'Token is valid',user:decoded,token})
    }catch(err){
        // remote the cookie
        return res.status(401).json({message:'Token is invalid'})
    }
})

app.use('/auth', authRoutes)
app.use('/post', postRoutes)
app.use('/comment', commentRoutes)

app.get('/', (req, res) =>{
    res.send(`Server is running `)
})

app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`)
    console.log(`Server is listening on port ${PORT}`)
})