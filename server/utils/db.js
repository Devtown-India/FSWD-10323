const ls = require("local-storage");

module.exports.initialiseDB = () => {
  const users = ls.get("users");
  if (!users) {
    ls.set("users", []);
  }
  const todos = ls.get("todos");
  if (!todos) {
    ls.set("todos", []);
  }
};
