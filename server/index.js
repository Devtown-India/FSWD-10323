const express = require("express");
const fs = require("fs");
const uuid = require("uuid");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const initializedb = require("./utils/initializedb");
const ls = require("local-storage");

const SECRET_KEY = "secret_key_sdf";

/*
  User schema
    id
    name
    email
    password
 */

/*
  Todo schema
    id
    user
    title
    isComplete
 */

const PORT = 8081;

const app = express();
initializedb();

const logger = (req, res, next) => {
  console.log(`Request method: ${req.method} and request path: ${req.path}`);
  next();
};
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(cookieParser());

const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.redirect('/login');
  }
  try {
    const data = jwt.verify(token, SECRET_KEY);
    req.userId = data.id;
    req.userEmail = data.email;
    return next();
  } catch {
    // token has expired
    return res.redirect('/logout');
  }
};

app.get("/", authorization, (req, res) => {
  console.log({
    email: req.userEmail,
    id: req.userId,
  });
  res.send(`Hi ${req.userEmail} !!`);
});

app.get("/login", (req, res) => {
  const token = req.cookies.access_token;
  if (token) {
    return res.redirect("/");
  }
  res.sendFile(__dirname + "/pages/login.html");
});

app.get("/signup", (req, res) => {
  const token = req.cookies.access_token;
  if (token) {
    return res.redirect("/");
  }
  res.sendFile(__dirname + "/pages/signup.html");
});

app.get('/logout', (req, res) => {
  res.clearCookie('access_token')
  res.redirect('/login')
})


app.post("/api/signup", (req, res) => {
  const { email, password, name } = req.body;
  const users = ls.get("users");
  if (users.find((user) => user.email === email)) {
    return res.status(400).send("User already exists");
  }
  const newUser = {
    id: uuid.v4(),
    name,
    email,
    password,
  };
  users.push(newUser);

  ls.set("users", users);
  return res.status(200).send("User created");
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const users = ls.get("users");
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).send("User not found");
  }
  if (user.password !== password) {
    return res.status(400).send("Password is incorrect");
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({ message: "Logged in successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
