const express = require("express");
const fs = require("fs");

const PORT = 8081;

const app = express();

const logger = (req,res,next)=>{
    console.log(`Request method: ${req.method} and request path: ${req.path}`)
    next()
}

app.use(logger)

app.get("/ping", (req, res) => {
  res.status(200).send("PONG");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
