import { FC } from 'react';

import Checkbox from 'shared/components/CheckBox';
import { Wrapper, Title } from './styled';
import { periodData, formatData, technologyData } from './data';
import { FilteredSectionProps } from './types';

const FilteredSection: FC<FilteredSectionProps> = () => {
  return (
    <Wrapper>
      <Title>
        <span>Filter Icon </span>
        Filter Section
      </Title>
      <div>
        <Title>Period</Title>
        {periodData.map(period => (
          <div key={period.title}>
            <Checkbox checked={!!period.value} handleChange={() => {}} />
            <span>{period.title}</span>
          </div>
        ))}
      </div>

      <div>
        <Title>Technology</Title>
        {technologyData.map(period => (
          <div key={period.title}>
            <Checkbox checked={!!period.value} handleChange={() => {}} />
            <span>{period.title}</span>
          </div>
        ))}
      </div>

      <div>
        <Title>Format</Title>
        {formatData.map(format => (
          <div key={format.title}>
            <Checkbox checked={!!format.value} handleChange={() => {}} />
            <span>{format.title}</span>
          </div>
        ))}
      </div>
      <span>Another</span>
    </Wrapper>
  );
};

export default FilteredSection;
