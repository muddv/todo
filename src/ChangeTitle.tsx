import { useAtom } from "jotai";
import { useState, FormEvent, ChangeEvent } from "react";
import { todosAtom } from "../stores/todos";

type ChangeTitleProps = {
  id: number;
  oldTitle: string;
};

export function ChangeTitle(props: ChangeTitleProps) {
  const [todos, setTodos] = useAtom(todosAtom);
  const [newTitle, setNewTitle] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let index;
    const todo = todos.data.find((t, i) => {
      if (t.id === props.id) {
        index = i;
        return t;
      }
    })!;
    todo.title = newTitle;
    todos.data[index!] = todo;
    setTodos({ data: todos.data });
    e.target && (e.target as HTMLFormElement).reset();
    setNewTitle("");
    closeModal();
  }
  function closeModal() {
    const modal: HTMLDialogElement = document.querySelector(
      `#changeTitle${props.id}`,
    )!;
    modal.close();
  }
  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTitle(e.target.value);
  }
  return (
    <dialog className="rounded border py-2" id={`changeTitle${props.id}`}>
      <form onSubmit={handleSubmit} className="flex flex-col px-10 py-5">
        <h2 className="mb-2 text-center text-lg">Change Title</h2>
        <div className="mb-2 text-gray-800">Old title: {props.oldTitle}</div>
        <label className="font-semibold">Title</label>
        <input
          className="mb-2 rounded border-2 border-gray-500"
          required
          type="text"
          placeholder="Cool new title"
          onChange={handleTitleChange}
        ></input>
        <div className="flex">
          <button
            className="mr-2 w-[100px] rounded border border-blue-700 bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
            type="submit"
          >
            Confirm
          </button>
          <button
            className=" w-[100px] rounded border border-red-700 px-4 py-2 font-bold text-red-600 hover:bg-red-700 hover:text-white"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}
