import React, { useState } from 'react';
import Todo from './Todo'
import NewTodoFrom from './NewTodoForm'
import './TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const remove = id => {
        setTodos(todos.filter(todo => {
            console.log("you are about to delete this item: ", todo);
            return(todo.id !== id) 
        }))
    }
    const update = (id, updateTask) => {
        const UpdatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updateTask }
            }
            return todo
        })
        setTodos(UpdatedTodos)
    }
    const togglecomplete = id => {
        const UpdatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.completed }
            }
            return todo
        })
        setTodos()
    }
    const create = newTodo => {
        setTodos([...todos, newTodo])
        console.log("New Item Created");
    }

    const todoList = todos.map(todo => {
        return (
            <Todo
                key={todo.id}
                remove={remove}
                togglecomplete={togglecomplete}
                update={update}
                create={create}
                todo={todo}
            />
        )
    })
    console.log(todos)


    return (
        <div className="TodoList">
            <h1>Simple React Todo List</h1>
            <NewTodoFrom createTodo={create} />
            <ul>{todoList}</ul>
        </div>
    )
}
export default TodoList
