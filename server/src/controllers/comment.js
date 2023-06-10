
import logger from '../logger';
import { Post,Comment } from '../db';

export const comment = async (req, res) => {
    try {
        const {id} = req.params;
        const {commentText,userId} = req.body;
        const comment = await Comment.create({
            commentText,
            user:userId,
        })
        // const post = await Post.findOne({_id:id})
        // post.comments.push(comment._id)
        // await post.save()

        const updatedPost = await Post.findByIdAndUpdate(id,{
            $push:{
                comments:comment._id
            }
        },{
            new:true
        })
        return res.status(200).json({
            message: "Comment posted successfully",
            success: true,
            data: updatedPost,
        });
    } catch (error) {
        logger.error(error);
        return res.status(500).json({
          message: error.message,
          success: false,
        });
    }
}
