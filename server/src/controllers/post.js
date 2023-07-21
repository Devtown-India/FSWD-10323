import { Post, Comment } from "../db";
import logger from "../logger";
import { validationResult } from "express-validator";
import axios from "axios";

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
          select: "firstName lastName email profilePicture",
        },
      });
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
      logger.error(errors);
      return res.status(400).json({
        message: errors.array(),
        success: false,
      });
    }
    const file = req.file;
    console.log(file);
    // upload the file to upload.io
    console.log(
      `https://api.upload.io/v2/accounts/${process.env.UPLOAD_IO_ACCOUNT_ID}/uploads/binary`
    );
    const uploadIoResponse = await axios.post(
      `https://api.upload.io/v2/accounts/${process.env.UPLOAD_IO_ACCOUNT_ID}/uploads/binary`,
      file.buffer,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPLOAD_IO_API_KEY}`,
        },
      }
    );
    const {fileUrl} = uploadIoResponse.data;
    const { title, description } = req.body;
    // const post = await Post.create({
    //   title,
    //   description,
    //   image: fileUrl,
    //   user: 'user from req.user'
    // });
    console.log({
      title,
      description,
      image: fileUrl,
      user: 'user from req.user'
    })
    return res.status(200).json({
      message: "Post created successfully",
      success: true,
      // data: post,
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
