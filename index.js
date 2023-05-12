const express = require("express");
const fs = require("fs");

const PORT = 8081;

const app = express();

const logUserAgent = (req,res,next)=>{
    const agent = req.headers['user-agent']
    if(agent.includes('Chrome'))return res.status(403).send("Unauthorised")
    next()
}

const logger = (req,res,next)=>{
    console.log(`Request method: ${req.method} and request path: ${req.path}`)
    next()
}

app.use(logUserAgent)
app.use(logger)

app.get("/", (req, res) => {
  res.status(200).send("First response from express  !!");
});

app.get('/product/:name', (req, res) => {
    const {name} = req.params
    res.status(200).send(`My name is ${name}`);
})

app.get("/todos", (req, res) => {
  const { count } = req.query;
  if (count) {
    fs.readFile("./db.js", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(JSON.parse(data).slice(0, count));
    });
  } else {
    fs.readFile("./db.js", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(JSON.parse(data));
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
