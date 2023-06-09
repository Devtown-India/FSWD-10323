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
        required:false,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
},{
    timestamps:true,
})

export const Post = mongoose.model('Post',PostSchema)