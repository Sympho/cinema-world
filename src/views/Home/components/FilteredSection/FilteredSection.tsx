import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import { movieFilterState } from 'store/atoms';
import { FilteredContainer } from './styled';

const FilteredSection = () => {
  const [filter, setFilter] = useRecoilState(movieFilterState);
  console.log('filter', filter);

  const updateFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <FilteredContainer>
      <span>Filter value: {filter}</span>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </FilteredContainer>
  );
};

export default FilteredSection;
