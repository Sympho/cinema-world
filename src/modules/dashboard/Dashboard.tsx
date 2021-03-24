import { FC } from 'react';

import { Container } from './StyledComponents';
import { DashBoardProps } from './types';

const DashBoard: FC<DashBoardProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default DashBoard;
