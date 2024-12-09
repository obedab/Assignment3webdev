import React, { useState, memo } from "react";
import "./24.TodoList.css";

const TodoList = memo(({ todos }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <li key={index} className="todo-item">{todo}</li>
            ))}
        </ul>
    );
});

const TodoListWithMemo = () => {
    const [todos, setTodos] = useState(["Learn React", "Learn Memoization"]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, input]);
            setInput("");
        }
    };

    return (
        <div className="todo-container">
            <h2 className="todo-heading">Todo List with Memo</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="todo-input"
                />
                <button onClick={addTodo} className="add-btn">Add Todo</button>
            </div>
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoListWithMemo;
