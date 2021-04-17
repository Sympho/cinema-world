import { FC } from 'react';

import Link from 'shared/components/Link';
import { Wrapper, Title, Avatar } from './styled';
import { MovieSectionType } from './types';

const Home: FC<MovieSectionType> = ({ movie }) => {
  return (
    <Wrapper>
      <Avatar />
      <Title>{movie.title}</Title>

      <Link to={movie.link}>Going to watch movie</Link>
      {/*<Checkbox checked={movie.isComplete} handleChange={updateFilter} />*/}
    </Wrapper>
  );
};

export default Home;
