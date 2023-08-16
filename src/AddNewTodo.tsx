import { useAtom } from "jotai";
import { useState, FormEvent, ChangeEvent } from "react";
import { todosAtom } from "../stores/todos";



export function AddNewTodo() {
  
  const [todos, setTodos] = useAtom(todosAtom);
  const [newTodo, setNewTodo] = useState({title: "", completed: false});
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const todo = {
      userId: 1,
      id: todos.data.length + 1,
      title: newTodo.title,
      completed: newTodo.completed,
    };
    todos.data.push(todo);
    setTodos({ data: todos.data });
    e.target && (e.target as HTMLFormElement).reset();
    setNewTodo({title: "", completed: false});
    closeModal();
  }
  function closeModal() {
    const modal: HTMLDialogElement = document.querySelector(".addNew")!;
    modal.close();
  }
  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    const todo = newTodo;
    todo.title = e.target.value;
    setNewTodo(todo);
  }
  function handleCompletedChange() {
    const todo = newTodo;
    todo.completed = !newTodo.completed;
    setNewTodo(todo);
  }
  return (
    <dialog className="addNew rounded border py-2">
      <div className="ml-48 w-1">
        <button
          className="w-fit rounded border border-red-700 px-4 py-2 font-bold text-red-600 hover:bg-red-700 hover:text-white"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col px-10 py-5">
        <h2 className="mb-2 text-center text-lg">Create new TODO</h2>
        <label className="font-semibold">Title</label>
        <input
          className="mb-2 rounded border-2 border-gray-500"
          required
          type="text"
          placeholder="My amazing todo"
          onChange={handleTitleChange}
        ></input>
        <label className="mb-4 flex w-full justify-between">
          Add as completed
          <input type="checkbox" onClick={handleCompletedChange}></input>
        </label>
        <button
          className="rounded border border-blue-700 bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
        >
          Create
        </button>
      </form>
    </dialog>
  );
}
