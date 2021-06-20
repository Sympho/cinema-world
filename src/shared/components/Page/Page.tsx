import { FC } from 'react';

import { StyledPage } from './style';

const Page: FC = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
