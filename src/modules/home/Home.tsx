import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Title } from './StyledComponents';

const Home: FC = () => {
  return (
    <Wrapper>
      <Title>Home Page</Title>

      <Link to="/dashboard">Going to Dashboard</Link>
    </Wrapper>
  );
};

export default Home;
