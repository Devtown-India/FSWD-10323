const express = require('express');
const router = express.Router();
const ls = require('local-storage');
const uuid = require('uuid');

router.get("/", (req, res) => {
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

router.post("/", (req, res) => {
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

module.exports = router