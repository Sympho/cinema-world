import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: false,
});

export const movieFilterState = atom({
  key: 'movieFilterState',
  default: 'Show All',
});

export const movieState = atom({
  key: 'movieState',
  default: [
    {
      title: 'Avengers',
      isComplete: true,
      link:
        'https://rezka.ag/films/drama/38175-bratya-po-krovi-grazhdanskaya-voyna-2021.html',
    },
    {
      title: 'Avengers',
      isComplete: false,
      link:
        'https://rezka.ag/films/drama/38175-bratya-po-krovi-grazhdanskaya-voyna-2021.html',
    },
    {
      title: 'Avengers',
      isComplete: false,
      link:
        'https://rezka.ag/films/drama/38175-bratya-po-krovi-grazhdanskaya-voyna-2021.html',
    },
    {
      title: 'Avengers',
      isComplete: false,
      link:
        'https://rezka.ag/films/drama/38175-bratya-po-krovi-grazhdanskaya-voyna-2021.html',
    },
    {
      title: 'Avengers',
      isComplete: false,
      link:
        'https://rezka.ag/films/drama/38175-bratya-po-krovi-grazhdanskaya-voyna-2021.html',
    },
    {
      title: 'Avengers',
      isComplete: false,
      link:
        'https://rezka.ag/films/drama/38175-bratya-po-krovi-grazhdanskaya-voyna-2021.html',
    },
  ],
});
