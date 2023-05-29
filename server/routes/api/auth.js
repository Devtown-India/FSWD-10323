const express = require('express');
const router = express.Router();
const ls = require('local-storage');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY

router.post("/login", (req, res) => {
  try {
    // validate user
    const { email, password } = req.body;
    const users = ls.get("users");
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    // authenticate user
    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }
    // authorise user
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        message: "User signup success",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.post("/signup", (req, res) => {
  try {
    const { name, email, password } = req.body;
    const users = ls.get("users");
    if (users.find((user) => user.email === email)) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const newUser = {
      id: uuid.v4(),
      name,
      email,
      password,
    };
    users.push(newUser);
    ls.set("users", users);
    return res.status(200).json({
      message: "User created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;