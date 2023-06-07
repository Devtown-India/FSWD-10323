import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import logger,{morganMiddleware} from './logger'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morganMiddleware)
app.use('/auth', authRoutes)

app.get('/', (req, res) =>{
    res.send(`Server is running `)
})

app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`)
})