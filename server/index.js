const express = require("express");
const fs = require("fs");
const uuid = require("uuid");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "secret_key_sdf";

const PORT = 8081;

const app = express();

const logger = (req, res, next) => {
  console.log(`Request method: ${req.method} and request path: ${req.path}`);
  next();
};
app.use(cors());
app.use(logger);
app.use(express.json());

app.get("/",(req, res) => {
  res.send(`Hi user!!`);
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/pages/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/pages/signup.html");
});

app.get('/logout', (req, res) => {
   res.send('route to logout')

})

app.post("/api/login", (req, res) => {
  res.send('api to login !!')
});

app.post("/api/signup", (req, res) => {
  res.send('api to signup !!')
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
