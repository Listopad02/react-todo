import React from "react";
import { BsCheck } from 'react-icons/bs'

const TodoItem = ({ todo }) => {
    return (
        <div>
            <BsCheck />
            { todo.title }
        </div>
    )
}

export default TodoItem