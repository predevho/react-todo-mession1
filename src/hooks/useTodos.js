import { useRef, useState } from "react";

export function useTodos() {
    const nextId = useRef(4)
    const [todos, setTodos] = useState([
        { id: 3, text: '할 일 3', completed: true },
        { id: 2, text: '할 일 2', completed: false },
        { id: 1, text: '할 일 1', completed: true },
    ])

    const addTodo = ({ text }) => {
        const todo = { id: nextId.current, text, completed: false }
        setTodos([todo, ...todos])
        nextId.current++
    }

    const removeTodo = (selectedTodo) => {
        const nextTodos = todos.filter((todo) => todo.id !== selectedTodo)
        setTodos(nextTodos)
    }
    const toggleTodo = (selectedTodo) => {
        const nextTodos = todos.map((todo) => {
            return selectedTodo === todo.id ? { ...todo, completed: !todo.completed } : todo
        })
        setTodos(nextTodos)
    }
    return { todos, addTodo, removeTodo, toggleTodo };
}

