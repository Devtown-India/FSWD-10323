import express from 'express'
import { comment } from '../controllers/comment'


const router = express.Router()

router.post('/:id', comment)


export default router