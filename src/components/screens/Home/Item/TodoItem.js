import React from "react";
import Check from "./Check";
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className="flex justify-between items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
            <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted} />
                <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{ todo.title }</span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <FaTrash size={20} className="text-pink-400 hover:text-red-700" />
            </button>
        </div>
    )
}

export default TodoItem