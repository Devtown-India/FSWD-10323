import logger from "../logger"
import { generateResetToken, verifyResetToken } from "../utils/token"

export const resetPassword = async (req, res,next) => {
    try {
       // check if user exists in the DB
       let userExists = true 
       if(!userExists){
        return res.status(400).json({
            message:"User does not exist",
            success:false,
            data:null
        })
       }
         // generate a token and send email
         const token = generateResetToken({
            email:"abc@mail.com"
         })
        const resetPasswordLink = `http://localhost:3000/reset-password/${token}`
        // send the email
        return res.status(200).json({
            message:"Reset password link sent to email",
            success:true,
            data:null
        })

    } catch (error) {
        logger.log(error)
    }
}

export const changePassword = async (req, res,next) => {
    try {
        const {password} = req.body
        const {token} = req.params
       // verify the token
        const payload = verifyResetToken(token)
        if(!payload){
            return res.status(400).json({
                message:"Invalid or expired token",
                success:false,
                data:null
            })
        }
        const {email} = payload
        const user = {}
        //! redundant code
        if(!user){
            return res.status(400).json({
                message:"User does not exist",
                success:false,
                data:null
            })
        }
        // update the password
        const hashEdPassword = "hashed password"
        user.password = hashEdPassword
        // save the user
        // send email
        return res.status(200).json({
            message:"Password updated successfully",
            success:true,
            data:null
        })
        
    } catch (error) {
        logger.log(error)
    }
}