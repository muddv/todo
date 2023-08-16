import { atom } from 'jotai'

export type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

type FetchRes = {
  data: Todo[],
  error?: string
}

export const todosAtom = atom<FetchRes>({data: []})
