import { useState } from "react";
import './Todo.css'
import TodoList from '../Todo-List/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

function Todo() {

    const [getTodos, setTodos] = useState ([
        {id: 1, title: 'Subang'},
        {id: 2, title: 'Bandung'},
        {id: 3, title: 'Surabaya'}
    ]) 

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    return (
        <div>
            <h2>Add Your City</h2>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos}/>
        </div>
    )
}

export default Todo