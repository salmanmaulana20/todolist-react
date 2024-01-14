import { useState } from "react";
import './TodoCreate.css'

function TodoCreate(props) {

    const [getInputTodo, setInputTudu] = useState ('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTodo
        }

        props.onCreateTodo(newTodo)

        setInputTudu('')
    }

    const handleInputTodo = (event) => {
        setInputTudu(event.target.value)
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo}/>
            <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
        </form>
    )
}

export default TodoCreate