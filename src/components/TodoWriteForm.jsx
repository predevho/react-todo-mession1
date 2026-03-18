export default function TodoWriteForm({ addTodo }) {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (form.todo.value.length === 0) {
            alert('할 일을 입력해주세요')
            return
        }
        addTodo({ text: form.todo.value })
        //입력후 input 초기화
        form.reset()
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="todo" placeholder="TO DO" />
            <button>등록</button>
        </form>
    )
}
