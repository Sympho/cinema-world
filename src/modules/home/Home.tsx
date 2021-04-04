import { FC } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import { Wrapper, Title } from './StyledComponents';

const Home: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Title>Home Page</Title>

      <Link to="/dashboard">Going to Dashboard</Link>

      <Footer />
    </Wrapper>
  );
};

export default Home;
