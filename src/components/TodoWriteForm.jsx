export default function TodoWriteForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (form.todo.value.length === 0) {
            alert('입력!')
            return
        }
        addTodo({ text: form.todo.value })
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="todo" placeholder="TO DO" />
            <button>등록</button>
        </form>
    )
}
