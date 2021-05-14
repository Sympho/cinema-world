import { FC } from 'react';

import GalleryItem from './GalleryItem';
import { Wrapper } from './styled';
import { GalleryProps } from './types';

const mocGalleryItem = [
  {
    id: 1,
    title: 'Ґодзілла проти Конґа (16+)',
    img: 'MoviePoster',
    technology: ['IMAX', '3D', '4DX'],
    day: '14 травня, пʼятниця',
    visibleTime: ['10:15', '12:30', '14:45', '19:15', '16:50'],
  },
  {
    id: 2,
    title: 'Ґодзілла проти Конґа (16+)',
    img: 'MoviePoster',
    technology: ['IMAX', '3D', '4DX'],
    day: '14 травня, пʼятниця',
    visibleTime: ['10:15', '12:30', '14:45', '19:15', '16:50'],
  },
  {
    id: 3,
    title: 'Ґодзілла проти Конґа (16+)',
    img: 'MoviePoster',
    technology: ['IMAX', '3D', '4DX'],
    day: '14 травня, пʼятниця',
    visibleTime: ['10:15', '12:30', '14:45', '19:15', '16:50'],
  },
  {
    id: 4,
    title: 'Ґодзілла проти Конґа (16+)',
    img: 'MoviePoster',
    technology: ['IMAX', '3D', '4DX'],
    day: '14 травня, пʼятниця',
    visibleTime: ['10:15', '12:30', '14:45', '19:15', '16:50'],
  },
  {
    id: 5,
    title: 'Ґодзілла проти Конґа (16+)',
    img: 'MoviePoster',
    technology: ['IMAX', '3D', '4DX'],
    day: '14 травня, пʼятниця',
    visibleTime: ['10:15', '12:30', '14:45', '19:15', '16:50'],
  },
  {
    id: 6,
    title: 'Ґодзілла проти Конґа (16+)',
    img: 'MoviePoster',
    technology: ['IMAX', '3D', '4DX'],
    day: '14 травня, пʼятниця',
    visibleTime: ['10:15', '12:30', '14:45', '19:15', '16:50'],
  },
  {
    id: 7,
    title: 'Ґодзілла проти Конґа (16+)',
    img: 'MoviePoster',
    technology: ['IMAX', '3D', '4DX'],
    day: '14 травня, пʼятниця',
    visibleTime: ['10:15', '12:30', '14:45', '19:15', '16:50'],
  },
];

const Gallery: FC<GalleryProps> = () => {
  return (
    <Wrapper>
      {mocGalleryItem.map(
        ({ id, title, img, visibleTime, technology, day }) => (
          <ul key={id}>
            <GalleryItem
              title={title}
              img={img}
              visibleTime={visibleTime}
              technology={technology}
              day={day}
            />
          </ul>
        ),
      )}
    </Wrapper>
  );
};

export default Gallery;
