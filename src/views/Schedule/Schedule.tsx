import { FC } from 'react';

import Page from 'shared/components/Page';
import { ScheduleContainer } from './styled';
import { ScheduleProps } from './types';

const Schedule: FC<ScheduleProps> = () => {
  return (
    <Page>
      <h1>Schedule</h1>
      <ScheduleContainer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae ea,
        iste neque omnis quaerat quo quos similique velit. Cupiditate esse
        fugiat ipsum omnis possimus rerum voluptatem. Quisquam, velit,
        voluptatum!
      </ScheduleContainer>
    </Page>
  );
};

export default Schedule;
