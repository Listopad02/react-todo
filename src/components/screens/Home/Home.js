import React from "react"
import TodoItem from "./Item/TodoItem"

const todos = [
    {
        id: 'xak',
        title: 'Finish the essay collaboration',
        isCompleted: false
    },
    {
        id: 'chnsd',
        title: 'Read next chapter of the book',
        isCompleted: false
    },
    {
        id: 'dcbjuh',
        title: 'Send the finished assignment',
        isCompleted: false
    },
]

const Home = () => {
    return (
        <div className="bg-gray-900 h-screen text-white">
            { todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            )) }
        </div>
    )
}

export default Home