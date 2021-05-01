import { selector } from 'recoil';

import { movieState, movieFilterState } from './atoms';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(movieFilterState);
    const list = get(movieState);

    switch (filter) {
      case 'Show Completed':
        return list.filter(item => item.isComplete);
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  },
});

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
