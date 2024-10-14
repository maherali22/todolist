// src/components/TodoList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, done, remove } from "../TodoList/slice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(add(newTodo.trim()));
      setNewTodo("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>Todo List</h1>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: todo.completed ? "#ccffcc" : "#ffcccc",
              
            }}
          >
            {todo.text}
            <button
              onClick={() => {
                if (todo.completed) {
                  dispatch(remove(todo.id));
                } else {
                  dispatch(done(todo.id));
                }
              }}
              style={{
                backgroundColor: todo.completed ? "red" : "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
              }}
            >
              {todo.completed ? "Remove" : "Done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
