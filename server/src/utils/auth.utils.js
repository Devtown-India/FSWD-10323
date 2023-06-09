import bcrypt from 'bcryptjs';

export const hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
}