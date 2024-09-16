import { useRef, useState } from "react";

function Tod() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  // {cuurent: }
  //inputRef is an object with a property called current

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">To Do List</h2>
      <div className="to-do-container w-full max-w-md">
        <ul className="bg-white rounded-lg shadow-md p-4">
          {todos.map(({ text, completed }, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <li
                  className={`cursor-pointer p-2 w-full rounded-lg ${
                    completed ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span
                  onClick={() => handleDeleteItem(index)}
                  className="text-red-500 cursor-pointer ml-4"
                >
                  ❌ 
                </span>
              </div>
            );
          })}
        </ul>
        <div className="mt-4 flex">
          <input
            ref={inputRef}
            placeholder="Enter item..."
            className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tod;
