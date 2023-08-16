import { useSetAtom } from "jotai";

import { filterAtom } from "../stores/filter";

export function Filter() {
  const setFilter = useSetAtom(filterAtom);
  function handleFilterChange(e) {
    console.log(e.target.value);
    setFilter(e.target.value);
  }
  return (
    <div>
      <fieldset onChange={handleFilterChange}>
        <legend className="text-lg">Filter by</legend>
        <div>
          <input
            type="radio"
            id="all"
            name="filter"
            value="All"
            defaultChecked={true}
          />
          <label htmlFor="all">All</label>
        </div>

        <div>
          <input type="radio" id="active" name="filter" value="Active" />
          <label htmlFor="active">Active</label>
        </div>

        <div>
          <input type="radio" id="completed" name="filter" value="Completed" />
          <label htmlFor="completed">Completed</label>
        </div>
      </fieldset>
    </div>
  );
}
