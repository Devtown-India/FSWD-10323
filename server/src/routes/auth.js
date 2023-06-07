import {Router} from 'express'
import { resetPassword ,changePassword} from '../controllers/auth'
const router = Router()

// create reset pass link
router.post('/reset-password', resetPassword)
// reset the password
router.post('/reset-password/:token', changePassword)

export default router