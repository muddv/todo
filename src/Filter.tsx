import type { FormEvent } from "react";
import { useSetAtom } from "jotai";

import { filterAtom } from "../stores/filter";
import type { FilterOptions } from "../stores/filter";

export function Filter() {
  const setFilter = useSetAtom(filterAtom);
  function handleFilterChange(e: FormEvent<HTMLFieldSetElement>) {
    e.target &&
      setFilter((e.target as HTMLInputElement).value as FilterOptions);
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
