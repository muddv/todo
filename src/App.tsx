import { TodoList } from "./TodoList";
import { Controls } from "./Controls";
import { AddNewTodo } from "./AddNewTodo";
import { Filter } from "./Filter";

export function App() {
  return (
    <div className="mt-10 flex h-screen w-screen flex-col items-center">
      <div className="flex w-screen justify-center">
        <Filter />
      </div>
      <Controls />
      <TodoList />
      <AddNewTodo />
    </div>
  );
}
