import { FC } from 'react';

import { Container, Main } from './style';
import { DashBoardProps } from './types';

const DashBoard: FC<DashBoardProps> = ({ text }) => {
  return (
    <Container>
      <Main>
        <h1>Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          blanditiis doloremque ea eos error ex ,impedit iste labore magnam
          minus nostrum officia, omnis quasi quibusdam reiciendis rerum sint ut
          voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          blanditiis doloremque ea eos error ex ,impedit iste labore magnam
          minus minus nostrum officia, omnis quasi quibusdam reiciendis rerum
          sint ut voluptatum.
        </p>
      </Main>
      {text}
    </Container>
  );
};

export default DashBoard;
