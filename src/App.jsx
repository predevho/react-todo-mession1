import TodoList from './components/TodoList'
import TodoWriteForm from './components/TodoWriteForm'
import { useTodos } from './hooks/useTodos'

function App() {
    const { todos, addTodo, toggleTodo, removeTodo } = useTodos()
    return (
        <>
            <TodoWriteForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </>
    )
}

export default App
