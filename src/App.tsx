import { TodoList } from "./TodoList";
import { Controls } from "./Controls"
import { AddNewTodo } from "./AddNewTodo";

export function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <TodoList />
      <Controls />
      <AddNewTodo />
    </div>
  );
}
