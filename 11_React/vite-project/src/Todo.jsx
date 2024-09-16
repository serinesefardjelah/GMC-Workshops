import React, { useRef, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  function addToDo() {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    console.log(todos);
    inputRef.current.value = "";
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log("delete todo");
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    console.log("complete todo");
  }

  return (
    <div className="m-2 p-2">
      <h1>Todo list</h1>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li
              className={`${
                todo.completed ? "line-through text-gray-600" : "text-gray-950"
              }`}
              key={index}
              onClick={() => completeTodo(index)}
            >
              * {todo.text}
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 p-2 m-2"
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <input type="text" ref={inputRef} placeholder="enter a todo" />
        <button onClick={addToDo}>Add todo</button>
      </div>
    </div>
  );
}

export default Todo;
