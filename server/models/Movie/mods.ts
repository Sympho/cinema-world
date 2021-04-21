import { database } from '../../core/Database.ts';
import MovieModel from './MovieModel.ts';
import GenreModel from './GenreModel.ts';
import GenreMovieModel from './GenreMovieModel.ts';

database.link([GenreMovieModel, GenreModel, MovieModel]);

export { GenreMovieModel, MovieModel, GenreModel };
