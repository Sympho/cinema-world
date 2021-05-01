import { useRecoilValue } from 'recoil';

import { movieStatsState } from 'store/selectors';

const MovieStats = () => {
  const {
    totalNum,
    totalWatchedNum,
    totalUnwatchedNum,
    percentWatched,
  } = useRecoilValue(movieStatsState);

  const formattedPercentWatched = Math.round(percentWatched);

  return (
    <ul>
      <li>Total movies: {totalNum}</li>
      <li>Movies already watched: {totalWatchedNum}</li>
      <li>Not watched movies: {totalUnwatchedNum}</li>
      <li>Percent already watched: {formattedPercentWatched}</li>
    </ul>
  );
};

export default MovieStats;
