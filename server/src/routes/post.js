import { Router } from "express";
import { createPost, deletePost, getPost, getPosts } from "../controllers/post";
import { body, query, param } from "express-validator";
import { User } from "../db";
import  upload from "../utils/uploader";
const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
// protected endpoint
router.post(
  "/",
  
  upload.single('image'),
  body("title").notEmpty().withMessage("Title is required"),
  createPost
),
  body("email").isEmail().withMessage("Email must be valid"),
  // protected endpoint !only the owner should be able to delete a post or a moderator
  router.post("/", deletePost);

// protected endpoint !only the loggedinuser should be able to post a comment or a moderator
router.post("/", deletePost);

export default router;
