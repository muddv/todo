import type { Todo as TodoType } from "../stores/todos";

type TodoProps = {
  todo: TodoType;
  tabIndex: number;
};

export function Todo(props: TodoProps) {
  return (
    <li className="m-5 ">{props.todo.title}</li>
  );
}
