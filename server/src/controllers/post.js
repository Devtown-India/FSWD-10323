import { Post, Comment } from "../db";
import logger from "../logger";
import { validationResult } from "express-validator";

export const getPosts = async (req, res) => {
  try {
    const { pageNumber = 1 } = req.query;
    // page size = 10
    const offset = (pageNumber - 1) * 10;
    const posts = await Post.find()
      .limit(10)
      .skip(offset)
      .sort({ createdAt: -1 })
      .populate("user", "firstName lastName email profilePicture")
    //   .populate("comments", "commentText user");
      .populate({
        path: "comments",
        populate: {
            path: "user",
            select:'firstName lastName email profilePicture'
        }
      })
    return res.status(200).json({
      message: "Posts fetched successfully",
      success: true,
      data: posts,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findOne({ _id: id });
    return res.status(200).json({
      message: "Post fetched successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({
        message: "Validation failed",
        success: false,
        errors: errors.array(),
      });
    }
    const { userId, title, description, image } = req.body;
    const post = await Post.create({
      title,
      description,
      image,
      user: userId,
    });
    return res.status(200).json({
      message: "Post created successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const deletePost = async (req, res) => {
  // only the owner should be able to delete a post or a moderator
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Post created successfully",
      success: true,
      data: post,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
