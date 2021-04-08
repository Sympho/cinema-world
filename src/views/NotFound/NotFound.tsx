import { FC } from 'react';

import Link from 'shared/components/Link';

import { Container, Main } from './StyledComponents';
import { NotFoundProps } from './types';

const NotFound: FC<NotFoundProps> = ({ text }) => {
  return (
    <Container>
      <Main>
        <p>
          <Link to="/">&#8617; Go to home</Link>
        </p>
        <h1>NotFoundProps</h1>
        <h1 style={{ fontSize: 120, textAlign: 'center' }}>404</h1>
      </Main>
      {text}
    </Container>
  );
};

export default NotFound;
