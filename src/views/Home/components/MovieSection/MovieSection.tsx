import { FC } from 'react';

import { Wrapper, Title, Avatar } from './styled';
import { MovieSectionType } from './types';
import { Image } from 'shared/components/Slider/components/Item/styled';

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
