import { FC } from 'react';

import Checkbox from 'shared/components/CheckBox';
import { Wrapper, Title } from './styled';
import { FilteredSectionProps } from './types';

const periodData = [
  { title: 'today', value: 'today' },
  { title: 'tomorrow', value: 'tomorrow' },
  { title: 'week', value: 'week' },
  { title: 'month', value: 'month' },
];

const FilteredSection: FC<FilteredSectionProps> = () => {
  return (
    <Wrapper>
      <Title>
        <span>Filter Icon </span>
        Filter Section
      </Title>
      <div>
        <title>Period</title>
        {periodData.map(period => (
          <div key={period.title}>
            <Checkbox checked={!!period.value} handleChange={() => {}} />
            <span>{period.title}</span>
          </div>
        ))}
      </div>

      <span>Technology</span>
      <span>Format</span>
      <span>Another</span>
    </Wrapper>
  );
};

export default FilteredSection;
