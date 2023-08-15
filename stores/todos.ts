import { atom } from 'jotai'

import { getTodos } from '../lib/fetchTodos'

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
  error?: string
}

type FetchRes = {
  data: Todo[],
  error?: string
}

export const todosAtom = atom<FetchRes>({data: []})
