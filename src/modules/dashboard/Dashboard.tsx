import { FC } from 'react';

import { Container, Main } from './StyledComponents';
import { DashBoardProps } from './types';

const DashBoard: FC<DashBoardProps> = ({ text }) => {
  return (
    <Container>
      <Main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        blanditiis doloremque ea eos error ex ,impedit iste labore magnam minus
        nostrum officia, omnis quasi quibusdam reiciendis rerum sint ut
        voluptatum.
      </Main>
      {text}
    </Container>
  );
};

export default DashBoard;
