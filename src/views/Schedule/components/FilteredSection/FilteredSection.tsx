import { useState, FC } from 'react';

import Checkbox from 'shared/components/CheckBox';
import { Wrapper, Title } from './styled';
import { periodData, formatData, technologyData } from './data';
import { TFilteredSectionProps } from './types';

const FilteredSection: FC<TFilteredSectionProps> = () => {
  const [value, setValue] = useState<boolean>(false);

  const handleChange = (checked: boolean) => setValue(!checked);

  return (
    <Wrapper>
      <Title>
        <span>Filter Icon</span>
        Filter Section Title
      </Title>
      <div>
        <Title>Period</Title>
        {periodData.map(period => (
          <div key={period.title}>
            <Checkbox
              checked={value}
              handleChange={() => handleChange(!!period.value)}
            />
            <span>{period.title}</span>
          </div>
        ))}
      </div>
      <div>
        <Title>Technology</Title>
        {technologyData.map(technology => (
          <div key={technology.title}>
            <Checkbox
              checked={!!technology.value}
              handleChange={() => handleChange(!!technology.value)}
            />
            <span>{technology.title}</span>
          </div>
        ))}
      </div>
      <div>
        <Title>Format</Title>
        {formatData.map(format => (
          <div key={format.title}>
            <Checkbox
              checked={!!format.value}
              handleChange={() => handleChange(!!format.value)}
            />
            <span>{format.title}</span>
          </div>
        ))}
      </div>
      <span>Another</span>
      Something what u want to add
    </Wrapper>
  );
};

export default FilteredSection;
