import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import Link from 'shared/components/Link';
import { filteredTodoListState } from 'store/selectors';
import { movieState } from 'store/atoms';
import MovieSection from './components/MovieSection';
import FilteredSection from './components/FilteredSection';
import Slider from 'shared/components/Slider';
import Item from 'shared/components/Slider/components/Item';
import { Wrapper, Title, MovieContainer } from './StyledComponents';
import { MovieType } from 'store/types';

const Home: FC = () => {
  const movieList = useRecoilValue<MovieType[]>(filteredTodoListState);
  const movies = useRecoilValue<MovieType[]>(movieState);

  return (
    <Wrapper>
      <Title>Home Page</Title>

      <Link to="/dashboard">Going to Dashboard</Link>

      <FilteredSection />

      <div style={{ paddingTop: '50px' }}>
        <Slider>
          {movies.map(movie => (
            <Item movie={movie} key={movie.id}>
              item1
            </Item>
          ))}
        </Slider>
      </div>
      <MovieContainer>
        {movieList.map(movieItem => (
          <MovieSection movie={movieItem} key={movieItem.id} />
        ))}
      </MovieContainer>
    </Wrapper>
  );
};

export default Home;
