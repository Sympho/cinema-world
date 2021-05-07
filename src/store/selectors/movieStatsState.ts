import { selector } from 'recoil';

import { movieState } from '../atoms';

export const movieStatsState = selector({
  key: 'movieStatsState',
  get: ({ get }) => {
    const movieList = get(movieState);
    const totalNum = movieList.length;
    const totalWatchedNum = movieList.filter(movie => movie.isComplete).length;
    const totalUnwatchedNum = totalNum - totalWatchedNum;
    const percentWatched =
      totalNum === 0 ? 0 : (totalWatchedNum / totalNum) * 100;

    return {
      totalNum,
      totalWatchedNum,
      totalUnwatchedNum,
      percentWatched,
    };
  },
});
