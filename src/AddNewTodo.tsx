import { useAtom } from 'jotai'
import React, { useState, FormEvent, ChangeEvent } from "react"
import { Todo, todosAtom } from "../stores/todos"

const initialState = {
  title: '',
  completed: false
}

export function AddNewTodo() {
  const [todos, setTodos] = useAtom(todosAtom)
  const [newTodo, setNewTodo] = useState(initialState)
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    let todo = {
      userId: 1,
      id: todos.data.length + 1,
      title: newTodo.title,
      completed: newTodo.completed
    }
    todos.data.push(todo)
    setNewTodo(initialState)
    setTodos({data: todos.data })
    e.target && (e.target as HTMLFormElement).reset()
    closeModal()
  }
  function closeModal() {
    document.querySelector(".addNew").close()
  }
  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    let todo = newTodo
    todo.title = e.target.value
    setNewTodo(todo)
  }
  function handleCompletedChange(e: React.ChangeEvent<HTMLInputElement>) {
    let todo = newTodo
    todo.completed = e.target.checked
    setNewTodo(todo)
  }
  return (
    <dialog className="addNew">
      <button onClick={closeModal}>close</button>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col"
      >
        <label>title</label>
        <input required placeholder="title" onChange={handleTitleChange} ></input>
        <label>completed</label>
        <input type="checkbox" onChange={handleCompletedChange}></input>
        <button type='submit'>add</button>
      </form>
    </dialog>
  )
}
