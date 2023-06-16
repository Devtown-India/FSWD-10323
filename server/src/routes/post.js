import { Router } from "express";
import { createPost, deletePost, getPost, getPosts } from "../controllers/post";
import { body, query, param } from "express-validator";
import { User } from "../db";
const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
// protected endpoint
router.post(
  "/",
  body('userId').custom(val=>{
    if(!val){
      throw new Error('User id is required')
    }
    const user = User.findOne({_id:val})
    if(!user){
      throw new Error('User not found')
    }
    return true
  }),
  body("title")
    .isLength({ min: 3, max: 50 })
    .withMessage("Title must be between 3 and 50 characters"),
  body("image").isURL().withMessage("Image must be a valid URL"),
  createPost
),
  body("email").isEmail().withMessage("Email must be valid"),
  // protected endpoint !only the owner should be able to delete a post or a moderator
  router.post("/", deletePost);

// protected endpoint !only the loggedinuser should be able to post a comment or a moderator
router.post("/", deletePost);

export default router;
