const express = require('express');
const router = express.Router();
const ls = require('local-storage');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = process.env.SECRET_KEY

router.post("/login", async (req, res) => {
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
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
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

router.post("/signup", async(req, res) => {
  try {
    const { name, email, password } = req.body;
    const users = ls.get("users");
    if (users.find((user) => user.email === email)) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const newUser = {
      id: uuid.v4(),
      name,
      email,
      password:hashedPassword,
    };
  
    console.log(hashedPassword)
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