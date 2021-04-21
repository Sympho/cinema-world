import { Relationships } from '../../core/Model.ts';
import GenreModel from './GenreModel.ts';
import MovieModel from './MovieModel.ts';

const GenreMovie = Relationships.manyToMany(GenreModel, MovieModel, {
  primaryKey: 'genreId',
  foreignKey: 'movieId',
});

export default GenreMovie;
