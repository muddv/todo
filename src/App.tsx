import { TodoList } from "./TodoList";
import { Controls } from "./Controls"
import { AddNewTodo } from "./AddNewTodo";
import { Filter } from "./Filter";

export function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Filter />
      <TodoList />
      <Controls />
      <AddNewTodo />
    </div>
  );
}
