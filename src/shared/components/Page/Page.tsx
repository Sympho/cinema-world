import { FC } from 'react';

import { StyledPage } from './styled';

const Page: FC = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
