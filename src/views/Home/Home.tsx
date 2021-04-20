import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import Link from 'shared/components/Link';
import { filteredTodoListState } from 'store/selectors';
import MovieSection from './components/MovieSection';
import FilteredSection from './components/FilteredSection';
import { Wrapper, Title, MovieContainer } from './StyledComponents';
import { MovieType } from 'store/types';

const Home: FC = () => {
  const movieList = useRecoilValue<MovieType[]>(filteredTodoListState);

  return (
    <Wrapper>
      <Title>Home Page</Title>

      <Link to="/dashboard">Going to Dashboard</Link>

      <FilteredSection />

      <MovieContainer>
        {movieList.map(movieItem => (
          <MovieSection movie={movieItem} key={movieItem.id} />
        ))}
      </MovieContainer>
    </Wrapper>
  );
};

export default Home;
