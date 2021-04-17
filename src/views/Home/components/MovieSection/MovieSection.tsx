import { ChangeEvent, FC } from 'react';
import { useRecoilState } from 'recoil';

import { movieFilterState } from 'store/atoms';
import Link from 'shared/components/Link';
import Checkbox from 'shared/components/CheckBox';
import { Wrapper, Title, Avatar } from './styled';
import { MovieSectionType } from './types';

const Home: FC<MovieSectionType> = ({ movie }) => {
  const [filter, setFilter] = useRecoilState(movieFilterState);
  console.log('filter', filter);

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <Wrapper>
      {filter}
      <Avatar />
      <Title>{movie.title}</Title>

      <Link to={movie.link}>Going to watch movie</Link>
      <Checkbox checked={movie.isComplete} handleChange={updateFilter} />
    </Wrapper>
  );
};

export default Home;
