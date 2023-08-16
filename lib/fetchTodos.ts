import type { Todo } from '../stores/todos'

export async function getTodos(): Promise<Todo[] | string> {
  let data
  const errorText = "Unable to get TODOs, try again or add your own"
  const url = "https://jsonplaceholder.typicode.com/users/1/todos"
  const res = await fetch(url).catch(() => {data = errorText})
  if ((!res) || (res && !res.ok)) data = errorText
  else {
    data = await res!.json()
    data = data.slice(0, 5)
  }
  return data
}
