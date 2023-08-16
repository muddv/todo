import { useAtom } from "jotai";

import { todosAtom } from "../stores/todos";

export function Controls() {
  const [todos, setTodos] = useAtom(todosAtom);
  function handleNew() {
    const dialog: HTMLDialogElement = document.querySelector(".addNew")!;
    dialog.showModal && dialog.showModal();
  }
  function deleteAll() {
    setTodos({ data: [], error: "" });
  }
  function deleteAllCompleted() {
    const activeTodos = todos.data.filter((t) => !t.completed);
    setTodos({ data: activeTodos, error: "" });
  }
  return (
    <div className="my-5 flex gap-5">
      <button
        className="rounded border border-blue-700 bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleNew}
      >
        Add new
      </button>
      <button
        className="rounded border border-red-700 bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
        onClick={deleteAllCompleted}
      >
        Delete all completed
      </button>
      <button
        className="rounded border border-red-700 bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
        onClick={deleteAll}
      >
        Delete all
      </button>
    </div>
  );
}
