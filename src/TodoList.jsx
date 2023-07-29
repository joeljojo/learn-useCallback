import { useCallback, useState } from "react";
import "./App.css";
import Button from "./Button";

const todosList = [
  { id: 1, text: "Todo 1", clickCount: 0 },
  { id: 2, text: "Todo 2", clickCount: 0 },
  { id: 3, text: "Todo 3", clickCount: 0 },
  { id: 4, text: "Todo 4", clickCount: 0 },
];

const TodoList = () => {
  const [todos, setTodos] = useState(todosList);
  console.log("TodoList Component re-rendered");
  const handleOnClick = useCallback(() => {
    // Increamenting the clickCount by one
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, clickCount: todo.clickCount + 1 }))
    );
  }, []);
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          {todo.text} -Count: {todo.clickCount}
        </div>
      ))}
      <Button label="Click Me" onClick={handleOnClick} />
    </div>
  );
};

export default TodoList;
