import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { movieStatsState } from 'store/selectors';

import { StatsContainer, Text, Title } from './style';

const MovieStats: FC = () => {
  const {
    totalNum,
    totalWatchedNum,
    totalUnwatchedNum,
    percentWatched,
    percentUnWatched,
  } = useRecoilValue(movieStatsState);

  const formattedPercentWatched = Math.round(percentWatched);
  const formattedPercentUnWatched = Math.round(percentUnWatched);

  return (
    <StatsContainer>
      <Title>Movies Statistics</Title>
      <ul>
        <li>
          Total movies: <Text>{totalNum}</Text>
        </li>
        <li>
          Movies already watched: <Text>{totalWatchedNum}</Text>
        </li>
        <li>
          Not watched movies: <Text>{totalUnwatchedNum}</Text>
        </li>
        <li>
          Percent already watched: <Text>{formattedPercentWatched}%</Text>
        </li>
        <li>
          Percent unwatched: <Text>{formattedPercentUnWatched}%</Text>
        </li>
      </ul>
    </StatsContainer>
  );
};

export default MovieStats;
