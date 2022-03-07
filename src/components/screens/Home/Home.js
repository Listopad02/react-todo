import React from "react"
import TodoItem from "./Item/TodoItem"
import { useState } from "react"

const data = [
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
    const [todos, setTodos] = useState(data)
    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">Todo App</h1>
            { todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} />
            )) }
        </div>
    )
}

export default Home