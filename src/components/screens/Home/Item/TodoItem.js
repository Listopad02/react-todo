import React from "react";
import Check from "./Check";

const TodoItem = ({ todo, changeTodo }) => {
    return (
        <button className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
                onClick={() => changeTodo(todo.id)}>
            <Check isCompleted={todo.isCompleted} />
            <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{ todo.title }</span>
        </button>
    )
}

export default TodoItem