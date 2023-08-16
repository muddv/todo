import { atom } from 'jotai'

enum FilterOptions {
  All = "All",
  Completed = "Completed",
  Active = "Active"
}

export const filterAtom = atom<FilterOptions>(FilterOptions.All)
