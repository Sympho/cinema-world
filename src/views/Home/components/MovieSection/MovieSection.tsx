import { FC } from 'react';

import { Image } from 'shared/components/Slider/components/Item/style';

import { Wrapper, Title, Avatar } from './style';
import { MovieSectionType } from './types';

const Home: FC<MovieSectionType> = ({ movie }) => {
  return (
    <Wrapper>
      <Avatar />
      <Title>{movie.title}</Title>

      <Image src={movie.imageBg} alt="" />
      {/*<Checkbox checked={movie.isComplete} handleChange={updateFilter} />*/}
    </Wrapper>
  );
};

export default Home;
