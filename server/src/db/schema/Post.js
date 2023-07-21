import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:[],
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
        default:[],
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
},{
    timestamps:true,
})

export const Post = mongoose.model('Post',PostSchema)