import { useSetAtom } from "jotai"

import { todosAtom } from "../stores/todos"

export function Controls() {
  const setTodos = useSetAtom(todosAtom)
  function handleNew() {
  
  const dialog = document.querySelector(".addNew")
    dialog.showModal()
    console.log(dialog)
  }
  function deleteAll() {
      setTodos({data: [], error: ""})
    }
  return (
    <div className="flex flex-col">
      <button onClick={handleNew}>Add new</button>
      <button onClick={deleteAll}>Delete all</button>
    </div>
  )
}
