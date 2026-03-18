export default function TodoItem({ todo, toggleTodo, removeTodo }) {
    return (
        <li
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all
        ${
            todo.completed
                ? 'opacity-50 bg-gray-50 border-gray-200'
                : 'bg-white border-gray-300 hover:border-gray-400 shadow-sm'
        }`}
        >
            <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                    ${todo.completed ? 'bg-gray-900 border-gray-900' : 'border-gray-300 bg-white'}`}
                aria-label="완료 토글"
            >
                {todo.completed && (
                    <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2">
                        <polyline points="1.5,5 4,7.5 8.5,2.5" />
                    </svg>
                )}
            </button>
            <span className={`flex-1 text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                {todo.text}
            </span>
            <button
                onClick={() => removeTodo(todo.id)}
                className="text-gray-300 hover:text-red-400 hover:bg-red-50 rounded px-1 text-sm transition-colors"
                aria-label={`${todo.text} 삭제`}
            >
                ✕
            </button>
        </li>
    )
}
