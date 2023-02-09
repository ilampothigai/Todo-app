import React, { useState } from 'react'
import './Todo.css'


const Todo = ({ todo, remove, update }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [task, setTask] = useState(todo.task)

    const handleRemove = id => {
        console.log(id);
        remove(id);
    }
    const toggleform = () => {
        setIsEditing(!isEditing)
    }
    const handlechange = e => {
        setTask(e.target.value)
    }

    const handleUpdate = e => {
        e.preventDefault()
        update(todo.id, task)
        toggleform()
    }
    const toggleComplete= e => {
        toggleComplete(e.target.id)
    }

    let result;
    if (isEditing) {
        result = (
            <div>
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input value={task} onChange={handlechange} />
                    <button>Save</button>
                </form>
            </div>
        )
    } else {
        result = (
            <div className="Todo">
                <li
                    id={todo.id}
                    onClick={toggleComplete}
                    className={todo.complete ? "Todo-Task completed" : "Todo-task"}>
                    {todo.task}
                </li>

                <div className="Todo-button">
                    <button onClick={toggleform}> <i className="fas fa-pen" /> Edit</button>
                    <button onClick={handleRemove.bind(this,todo.id)}><i className="fas fa-trash" /> Delete</button>
                </div>
            </div>
        )
    }
    return result
}
export default Todo