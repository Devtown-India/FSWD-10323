import express from 'express'
import { comment, deleteComment } from '../controllers/comment'


const router = express.Router()

router.post('/:id', comment)

router.delete('/:id', deleteComment)

export default router