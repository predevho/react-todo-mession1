import TodoItem from './TodoItem.jsx'
export default function TodoList({ todos, toggleTodo, removeTodo }) {
    return (
        <>
            <p className="text-[11px] font-semibold text-gray-800 uppercase tracking-widest mb-2.5">목록</p>
            <ul className="flex flex-col gap-1.5">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
                ))}
            </ul>
        </>
    )
}
