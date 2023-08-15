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
    <li className="m-5 flex flex-col border-2 border-black p-2">
      <h2 className={`${completed && "line-through"}`}>{props.todo.title}</h2>
      <label>
        Done
        <input
          className="m-2"
          type="checkbox"
          checked={completed}
          onChange={handleCheck}
        ></input>
      </label>
      <button onClick={handleDelete}>delete task</button>
    </li>
  );
}
