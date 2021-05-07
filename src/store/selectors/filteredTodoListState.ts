import { selector } from 'recoil';

import { movieFilterState, movieState } from '../atoms';

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
