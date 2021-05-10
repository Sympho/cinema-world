import { FC } from 'react';

import Page from 'shared/components/Page';
import FilteredSection from './components/FilteredSection';
import Gallery from './components/Gallery';
import { ScheduleContainer, Info, Title, Content } from './styled';
import { ScheduleProps } from './types';

const Schedule: FC<ScheduleProps> = () => {
  return (
    <Page>
      <ScheduleContainer>
        <Info>
          <Title>Розклад сеансів у Києві (Blockbuster)</Title>
          <span>Some Info Icon</span>
        </Info>

        <Content>
          <FilteredSection />
          <Gallery />
        </Content>
      </ScheduleContainer>
    </Page>
  );
};

export default Schedule;
