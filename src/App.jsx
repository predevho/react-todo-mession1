import { useRef, useState } from 'react'

function App() {
    const nextId = useRef(4)
    const [todos, setTodos] = useState([
        { id: 1, value: '할 일 1', complete: true },
        { id: 2, value: '할 일 2', complete: false },
        { id: 3, value: '할 일 3', complete: true },
    ])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (form.todo.value.length === 0) return alert('할 일을 입력해주세요')
        setTodos([{ id: nextId.current, value: form.todo.value, complete: false }, ...todos])
        nextId.current++
    }
    const removeTodo = (selectedTodo) => {
        const nextTodos = todos.filter((todo) => todo.id !== selectedTodo)
        setTodos(nextTodos)
    }
    const toggleTodo = (selectedTodo) => {
        const nextTodos = todos.map((todo) => {
            return selectedTodo === todo.id ? { ...todo, complete: !todo.complete } : todo
        })
        setTodos(nextTodos)
    }
    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="todo" placeholder="TO DO" />
                <button>등록</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo.id)} />
                        {todo.id}/{todo.value} <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
