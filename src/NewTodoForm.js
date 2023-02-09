import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'

const NewTodoFrom = ({ createTodo }) => {
    const [userInput, setuserInput] = useState({})

    const handlechange = e => {
        setuserInput({ [e.target.name]: e.target.value })
    }
    const handlesubmit = e => {
        e.preventDefault();
        if (userInput.task === '') {
            alert('please enter the task')
        } else {
            const newTodo = { id: uuid(), task: userInput.task, completed: false }
            createTodo(newTodo)
            setuserInput({ task: '' })
        }
    }

    return (
        <form className='NewTodoForm'
            onSubmit={handlesubmit}>
            <label>New Todo</label>
            <input
                value={userInput.task}
                onChange={handlechange}
                type='text'
                name='task'
                placeholder='new todo'
            />
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodoFrom