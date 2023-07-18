import mongoose from "mongoose";
import { hashPassword } from "../../utils/auth.utils";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        required:false,
    },
    phone:{
        type:String,
        required:false,
    },
    role:{
        type:Number,
        default:0,
        // 0 - user
        // 1 - moderator
        // 2 - admin
    },
    disabled:{
        type:Boolean,
        default:false,
    },
    lastLogin:{
        type:Date,
        required:false,
    },
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
    }],
    tokens:[{
        type:String,
    }],
},{
    timestamps:true,
})

// virtual properties
UserSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

UserSchema.virtual('initials').get(function(){
    return `${this.firstName[0]}${this.lastName[0]}`
})

// middlewares
UserSchema.pre('save',async function(next){
    console.log('hasing password')
    if(!this.isModified('password')) return next()
    const hashedPassword = await hashPassword(this.password)
    this.password = hashedPassword
    next()
})

// static method
UserSchema.statics.exists = async function(id){
    try{
        const user = await this.findOne({_id:id})
        if(user) throw new Error('User already exists')
        return user
    }catch(error){
        throw error
    }
}
UserSchema.statics.findByEmail = async function(email){
    try{
        console.log(email)
        const user = await this.findOne({email})
        if(user) throw new Error('User already exists')
        return 
    }catch(error){
        throw error
    }
}
export const User = mongoose.model('User',UserSchema)
