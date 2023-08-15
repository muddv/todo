import { useAtom } from "jotai";
import { useEffect, useState } from "react";

import type { Todo as TodoType } from "../stores/todos";
import { todosAtom } from "../stores/todos";
import { getTodos } from "../lib/fetchTodos";
import { Todo } from "./Todo";

export function TodoList() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useAtom(todosAtom);
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

  if (loading) {
    return <div>Loading...</div>;
  } else if (todos.error && !todos.data[0]) {
    return <div>{todos.error}</div>;
  } else
    return (
      <ul>
        {todos.data.map((t, i) => (
          <Todo todo={t as TodoType} tabIndex={i} key={t.id} />
        ))}
      </ul>
    );
}
