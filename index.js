const express = require("express");
const fs = require("fs");

const PORT = 8081;

const app = express();

const logger = (req, res, next) => {
  console.log(`Request method: ${req.method} and request path: ${req.path}`);
  next();
};

app.use(logger);

app.get("/ping", (req, res) => {
  res.status(200).send("PONG");
});

// create an endpoint to get all of the todos

/**
 response body structure
 * status: 200
 * data: {}
 * message: "Success"
 */

app.get("/todos", async (req, res) => {
  try {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Internal Server Error",
          data: null,
        });
      }
      return res.status(200).json({
        message: "Successfully fetched the todos",
        data: JSON.parse(data),
      });
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      data: null,
    });
  }
});

// create an endpoint to add a todo
app.post('/todos',async (req,res)=>{
  console.log(req.body)
  return res.json(req.body)
  // const {isComplete,title} = req.body;

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
