const express = require("express");
const fs = require("fs");
const uuid = require("uuid");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const ls = require("local-storage");
const { initialiseDB } = require("./utils/db");
const cookieParser = require("cookie-parser");

const SECRET_KEY = "secret_key_sdf";

const PORT = 8081;

const app = express();

/**
 * id: string (uuid)
 * name: string
 * email: string
 * password: string (encrypt the password)
 *  */

const logger = (req, res, next) => {
  console.log(`Request method: ${req.method} and request path: ${req.path}`);
  next();
};

initialiseDB();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.send(`Hi user!!`);
});

// endpoints to pages

app.get("/login", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/pages/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/pages/signup.html");
});

app.get("/logout", (req, res) => {
  res.send("route to logout");
});

// APi crud endpoints

app.post("/api/login", (req, res) => {
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

app.post("/api/signup", (req, res) => {
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
    console.log(users);
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
