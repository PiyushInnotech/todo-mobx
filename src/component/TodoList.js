import React, { useState } from "react";
import { observer } from "mobx-react";
import { todoStore } from "../store.js"

const TodoList = observer(() => {
    const [newTodo, setNewTodo] = useState("");
    const todoList = todoStore.todos

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            todoStore.addTodo(newTodo);
            setNewTodo("");
        }
    };

    const handleRemoveTodo = (index) => {
        todoStore.removeTodo(index);
    };
    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
})

export default TodoList