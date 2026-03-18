import TodoList from './components/TodoList'
import TodoWriteForm from './components/TodoWriteForm'
import { useTodos } from './hooks/useTodos'

function App() {
    const { todos, addTodo, toggleTodo, removeTodo } = useTodos()
    return (
        <div className="min-h-screen bg-[#f5f4f0] flex justify-center px-4 py-12">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-sm h-fit">
                <h1 className="text-xl font-semibold text-gray-900 tracking-tight mb-1">To DO</h1>
                <p className="text-xs text-gray-400 mb-7">할거 정리</p>
                <TodoWriteForm addTodo={addTodo} />
                <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            </div>
        </div>
    )
}

export default App
