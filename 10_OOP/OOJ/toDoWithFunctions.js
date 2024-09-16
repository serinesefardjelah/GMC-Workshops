// ToDo List
const todoList = [];

// Example function to add a ToDo when the "Add" button is clicked
function addTodo() {
  const inputElement = document.getElementById("newTodo");
  const todoText = inputElement.value;

  if (todoText.trim() !== "") {
    const newTodo = { id: Date.now(), text: todoText, completed: false };
    todoList.push(newTodo);
    displayTodo(newTodo);
    inputElement.value = "";
  }
}

// Example function to display a ToDo in the list
function displayTodo(todo) {
  const todoListElement = document.getElementById("todoList");

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" ${todo.completed ? "checked" : ""} >

    <span>${todo.text}</span>

    <button style="margin-left: auto;" onclick="deleteTodo(${
      todo.id
    })">Delete</button>
  `;

  todoListElement.appendChild(li);
}

// Example function to toggle the completed status of a ToDo
function toggleCompleted(id) {
  const todoToUpdate = todoList.find((todo) => todo.id === id);
  if (todoToUpdate) {
    todoToUpdate.completed = !todoToUpdate.completed;
    refreshTodoList();
  }
}

// Example function to delete a ToDo
function deleteTodo(id) {
  const indexToDelete = todoList.findIndex((todo) => todo.id === id);
  if (indexToDelete !== -1) {
    todoList.splice(indexToDelete, 1);
    refreshTodoList();
  }
}

// function to refresh the displayed ToDo list after delete
function refreshTodoList() {
  const todoListElement = document.getElementById("todoList");
  todoListElement.innerHTML = "";
  todoList.forEach((todo) => displayTodo(todo));
}
