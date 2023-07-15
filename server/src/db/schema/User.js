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

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    const hashedPassword = await hashPassword(this.password)
    this.password = hashedPassword
    next()
})

export const User = mongoose.model('User',UserSchema)
