import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { movieStatsState } from 'store/selectors';
import { Text } from './styled';

const MovieStats: FC = () => {
  const {
    totalNum,
    totalWatchedNum,
    totalUnwatchedNum,
    percentWatched,
  } = useRecoilValue(movieStatsState);

  const formattedPercentWatched = Math.round(percentWatched);

  return (
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
    </ul>
  );
};

export default MovieStats;
