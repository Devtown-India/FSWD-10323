const express = require("express");
const fs = require("fs");
const cors = require("cors");
const dotenv = require('dotenv')
dotenv.config(__dirname+"/.env")

const { initialiseDB } = require("./utils/db");
const cookieParser = require("cookie-parser");
const pageRoutes = require('./routes/pages');
const authRoutes = require('./routes/api/auth');
const todoRoutes = require('./routes/api/todo');
const {logger,authMiddleware} = require("./middlewares");

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

initialiseDB();

//middlewares
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

// routes
app.use('/',pageRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/todos',authMiddleware,todoRoutes);

// logout route
app.get("/logout", (req, res) => {
  res.clearCookie("access_token");
  return res.redirect("/login");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
