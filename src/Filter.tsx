import { useSetAtom } from "jotai"

import { filterAtom } from '../stores/filter'

export function Filter() {
  const setFilter = useSetAtom(filterAtom)
  function handleFilterChange(e) {
    console.log(e.target.value)
    setFilter(e.target.value)
  }
  return (
    <div className="mt-16">
      <fieldset onChange={handleFilterChange}>
  <legend>Select Filter Options</legend>

  <div>
    <input type="radio" id="all" name="filter" value="All" defaultChecked={true} />
    <label htmlFor="all">All</label>
  </div>

  <div>
    <input type="radio" id="completed" name="filter" value="Completed" />
    <label htmlFor="completed">Completed</label>
  </div>

  <div>
    <input type="radio" id="active" name="filter" value="Active" />
    <label htmlFor="active">Active</label>
  </div>
</fieldset>
    </div>
  )
}
