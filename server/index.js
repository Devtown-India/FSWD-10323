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
// user
/**
 * id: string (uuid)
 * name: string
 * email: string
 * password: string (encrypt the password)
 *  */
// todo
/**
 * id: string (uuid)
 * title: string
 * isComplete: boolean
 * userId: string (uuid)
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
app.use(express.static("public"));

const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.redirect("/login");
  }
  try {
    const { id, email } = jwt.verify(token, SECRET_KEY);
    req.user = {
      id,
      email,
    };
    next();
  } catch (error) {
    res.redirect("/logout");
  }
};
// todos endpoints
app.get("/", authMiddleware, (req, res) => {
  const {
    user: { email },
  } = req;
  // return res.send(`Hi ${email}`);
  return res.sendFile(__dirname + "/pages/todo.html");
});

app.get("/todos", authMiddleware, (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const todos = ls.get("todos").filter((todo) => todo.userId === id);
    return res.status(200).json({
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.post("/todos", authMiddleware, (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const { title } = req.body;
    const todos = ls.get("todos");
    const newTodo = {
      id: uuid.v4(),
      title,
      isComplete: false,
      userId: id,
    };
    todos.push(newTodo);
    ls.set("todos", todos);
    return res.status(200).json({
      message: "Todo created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

//

// endpoints to pages

app.get("/login", (req, res) => {
  const token = req.cookies.access_token;
  if (token) {
    return res.redirect("/");
  }
  console.log(__dirname);
  res.sendFile(__dirname + "/pages/login.html");
});

app.get("/signup", (req, res) => {
  const token = req.cookies.access_token;
  if (token) {
    return res.redirect("/");
  }
  res.sendFile(__dirname + "/pages/signup.html");
});

app.get("/logout", (req, res) => {
  res.clearCookie("access_token");
  return res.redirect("/login");
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
