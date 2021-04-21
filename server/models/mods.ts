import { database } from '../core/Database.ts';
import UserModel from './UserModel.ts';
import { MovieModel, GenreModel, GenreMovieModel } from './Movie/mods.ts';

database.link([UserModel, GenreMovieModel, MovieModel, GenreModel]);

export { UserModel, GenreMovieModel, MovieModel, GenreModel };
