import { Router } from "express";
const { body } = require("express-validator");
import { resetPassword, changePassword, signup } from "../controllers/auth";
const router = Router();

// create reset pass link
router.post("/reset-password", resetPassword);
// reset the password
router.post("/reset-password/:token", changePassword);
router.post(
  "/signup",
  // validate using express-validator
  body("email").isEmail().withMessage("Please enter a valid email."),
  body("password").trim().isLength({ min: 5 }),
  body("firstName").trim().not().isEmpty(),
  body("lastName").trim().not().isEmpty(),
  signup
);

export default router;
