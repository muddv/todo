import { atom } from 'jotai'

enum FilterOptions {
  All = "All",
  Completed = "Complted",
  Active = "Active"
}

export const filterAtom = atom<FilterOptions>(FilterOptions.All)
