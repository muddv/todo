import { useState } from "react";
import { useAtom } from "jotai";
import { todosAtom, type Todo as TodoType } from "../stores/todos";

type TodoProps = {
  todo: TodoType;
  tabIndex: number;
};

export function Todo(props: TodoProps) {
  const [completed, setCompleted] = useState(props.todo.completed);
  const [todos, setTodos] = useAtom(todosAtom);
  function handleCheck() {
    setCompleted(!completed);
    props.todo.completed = !completed;
  }
  function handleDelete() {
    let data = todos.data;
    data.splice(props.tabIndex, 1);
    setTodos({ data: data });
  }
  return (
    <li
      className={`m-5 flex max-w-[400px] flex-col border-2 border-black p-2 md:w-[320px] md:max-w-[400px] ${
        completed && "bg-gray-50"
      }`}
    >
      <h2 className={`${completed && "line-through"} `}>{props.todo.title}</h2>
      <label className="w-fit">
        Done
        <input
          className="m-5 h-5 w-5"
          type="checkbox"
          checked={completed}
          onChange={handleCheck}
        ></input>
      </label>
      <button
        className="w-fit rounded border border-red-700 px-4 py-2 font-bold text-red-600 hover:bg-red-700 hover:text-white"
        onClick={handleDelete}
      >
        delete task
      </button>
    </li>
  );
}
