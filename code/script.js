/*
const todo = [{
    text: string,
    completed: boolean | false,
    id: string
}]
*/

const todoContainer = document.querySelector("ul");
const input = document.querySelector("input");
const addbutton = document.querySelector("#add");
const editButton = document.querySelector("#edit");

editButton.style = "display: none";

// add  | edit

let idOfElementToEdit = null;

const todos = [];

const showEdit = (id) => {
  const element = todos.find((todo) => todo.id === id);
  input.value = element.text;
  addbutton.style = "display: none";
  editButton.style = "display: inline";
  idOfElementToEdit = id;
};

const renderList = () => {
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    deleteButton.addEventListener("click", (e) => {
      li.remove();
      const id = todo.id;
      const index = todos.findIndex((todo) => todo.id === id);
      todos.splice(index, 1);
    });
    editButton.addEventListener("click", (e) => {
      showEdit(todo.id);
    });

    editButton.style = "background:red";

    deleteButton.innerHTML = "delete";
    editButton.innerHTML = "Edit";
    li.innerHTML = `
        ${todo.text} 
        `;
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    todoContainer.appendChild(li);
  });
};

const handleAdd = (e) => {
  const itemToAdd = input.value;
  if (itemToAdd !== null && itemToAdd !== "") {
    todos.push({
      text: itemToAdd,
      completed: false,
      id: Date.now(),
    });
    input.value = "";
    renderList();
    return;
  } else {
    return window.alert("adding an empty item is not possible");
  }
};

const handleEdit = (e) => {
  const newValue = input.value;
  const element = todos.find((todo) => todo.id === idOfElementToEdit);
  element.text = newValue;
  renderList();
  addbutton.style = "display: inline";
  editButton.style = "display: none";
  input.value = "";
};

addbutton.addEventListener("click", handleAdd);
editButton.addEventListener("click", handleEdit);
