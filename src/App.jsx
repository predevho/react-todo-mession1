import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['할 일 1', '할 일 2', '할 일 3'])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        setTodos([form.todo.value, ...todos])
    }
    const removeTodo = (selectedTodo) => {
        const filterTodos = todos.filter((todo, index) => index != selectedTodo)
        setTodos(filterTodos)
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" placeholder="TO DO" />
                <button type="submit">등록</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => removeTodo(index)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
