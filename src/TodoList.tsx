import { useAtom, useAtomValue } from "jotai";
import { useEffect, useState } from "react";

import type { Todo as TodoType } from "../stores/todos";
import { todosAtom } from "../stores/todos";
import { filterAtom } from "../stores/filter";
import { getTodos } from "../lib/fetchTodos";
import { Todo } from "./Todo";

export function TodoList() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useAtom(todosAtom);
  const filterOption = useAtomValue(filterAtom);
  async function handleFetch() {
    setLoading(true);
    let data = await getTodos();
    if (typeof data === "string") {
      setTodos({ data: [], error: data });
      setLoading(false);
      return;
    } else if (data[0]) {
      let todoData = data[0] as TodoType;
      if (todoData.title) {
        setTodos({ data: data as TodoType[], error: "" });
        setLoading(false);
        return;
      }
    }
  }
  useEffect(() => {
    handleFetch();
  }, []);

  function filterTodos(todo: TodoType) {
    if (filterOption === "All") return true;
    else if (filterOption === "Completed" && !todo.completed) return false;
    else if (filterOption === "Active" && todo.completed) return false;
    return true;
  }

  if (loading) {
    return <div>Loading...</div>;
  } else if (todos.error && !todos.data[0]) {
    return <div>{todos.error}</div>;
  } else if (todos.data[0])
    return (
      <ul>
        {todos.data
          .filter((t) => filterTodos(t))
          .map((t, i) => (
            <Todo todo={t} tabIndex={i} key={t.id} />
          ))}
      </ul>
    );
  else return <div>No current TODOs, you can add new ones</div>;
}
