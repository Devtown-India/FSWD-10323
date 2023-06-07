import jwt from 'jsonwebtoken'
import logger from '../logger'

const resetPassSecret = process.env.RESET_PASSWORD_SECRET
const authSecrett = process.env.AUTH_SECRET

export const generateResetToken = (payload) => {
    return jwt.sign(payload,resetPassSecret,{expiresIn:'5m'})
}
export const verifyResetToken = (token) => {
    try {
        const payload = jwt.verify(token,resetPassSecret)
        return payload
    } catch (error) {
        logger.log(error)
        return false
    }
}