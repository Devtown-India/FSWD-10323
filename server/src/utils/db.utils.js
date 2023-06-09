import mongoose from 'mongoose'
import logger from '../logger/index'



export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URI ,{})
        logger.warn('Connected to DB')
    } catch (error) {
        logger.error(error.message)
    }
}