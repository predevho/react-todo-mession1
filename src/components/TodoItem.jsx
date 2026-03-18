export default function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
        <li>
            <input type="checkbox" onChange={() => toggleTodo(todo.id)} checked={todo.completed} />
            {todo.id}/{todo.text} <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    )
}
