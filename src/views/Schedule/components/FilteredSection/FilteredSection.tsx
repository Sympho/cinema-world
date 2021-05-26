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

const technologyData = [
  { title: '4DX', value: '4dx' },
  { title: 'Cinetech+', value: 'cinetech' },
  { title: 'IMAX', value: 'imax' },
  { title: `RE'LUX`, value: 'relux' },
];

const formatData = [
  { title: '2D', value: '2D' },
  { title: '3D', value: '3D' },
];

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
