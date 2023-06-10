import {Router} from 'express'
import { resetPassword ,changePassword, signup} from '../controllers/auth'
const router = Router()

// create reset pass link
router.post('/reset-password', resetPassword)
// reset the password
router.post('/reset-password/:token', changePassword)
router.post('/signup', signup)


export default router