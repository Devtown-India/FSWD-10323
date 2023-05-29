//! this router takes care of serving pages

const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares");
const path = require("path");

router.get("/", authMiddleware, (req, res) => {
  const {
    user: { email },
  } = req;
  return res.sendFile(path.resolve() + "/pages/todo.html");
});

router.get("/login", (req, res) => {
  const token = req.cookies.access_token;
  if (token) {
    return res.redirect("/");
  }
  res.sendFile(path.resolve() + "/pages/login.html");
});

router.get("/signup", (req, res) => {
  const token = req.cookies.access_token;
  if (token) {
    return res.redirect("/");
  }
  res.sendFile(path.resolve() + "/pages/signup.html");
});

module.exports = router;
