import './TodoList.css'

function TodoList(props) {
    
    return (
        <ul>
            {
                props.dataTodos.map ((todo) => {
                    return <li key={todo.id}>{todo.title}</li>
                })
            }
        </ul>
    )
}

export default TodoList