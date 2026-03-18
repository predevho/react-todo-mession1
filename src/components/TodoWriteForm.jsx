export default function TodoWriteForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (!form.todo.value.trim()) return alert('할 일을 입력해주세요')
        addTodo({ text: form.todo.value })
        form.reset()
    }
    return (
        <form onSubmit={handleOnSubmit} className="flex gap-2 mb-7">
            <input
                type="text"
                name="todo"
                placeholder="새로운 할 일 입력..."
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-gray-50
                   focus:outline-none focus:border-gray-900 focus:bg-white transition-colors
                   placeholder:text-gray-300"
            />
            <button
                className="bg-gray-900 text-white rounded-xl px-5 py-2.5 text-sm font-medium
                         hover:bg-gray-700 active:scale-95 transition-all"
            >
                추가
            </button>
        </form>
    )
}
