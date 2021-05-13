import { FC } from 'react';

import { Wrapper } from './styled';
import { FilteredSectionProps } from './types';

const FilteredSection: FC<FilteredSectionProps> = () => {
  return (
    <Wrapper>
      <span>Filter Section</span>
      <span>Period</span>
      <span>Technology</span>
      <span>Format</span>
      <span>Another</span>
    </Wrapper>
  );
};

export default FilteredSection;
