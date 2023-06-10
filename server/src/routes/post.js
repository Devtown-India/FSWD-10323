import {Router} from 'express'
import { createPost, deletePost, getPost,getPosts } from '../controllers/post'
const router = Router()

router.get('/', getPosts)
router.get('/:id', getPost)
// protected endpoint
router.post('/', createPost)
// protected endpoint !only the owner should be able to delete a post or a moderator
router.post('/', deletePost)

// protected endpoint !only the loggedinuser should be able to post a comment or a moderator
router.post('/', deletePost)

export default router