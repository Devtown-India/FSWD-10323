import jwt from 'jsonwebtoken'
import logger from '../logger'


export const generateToken = (payload) => {
    return jwt.sign(payload,process.env.AUTH_SECRET,{expiresIn:'1d'})
}

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