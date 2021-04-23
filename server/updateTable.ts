import { database } from './core/Database.ts';

const { args } = Deno;

const modelPaths = {
  UserModel: './models/UserModel.ts',
  GenreMovieModel: './models/Movie/GenreMovieModel.ts',
  GenreModel: './models/Movie/GenreModel.ts',
  MovieModel: './models/Movie/MovieModel.ts',
};

const importFiles = async () => {
  return await Promise.all(
    args.map(async (modelName: string) => {
      // @ts-ignore
      const path = modelPaths[modelName];
      if (path) {
        const { default: Model } = await import(path);
        return await Model;
      }
    }),
  );
};

const models = await importFiles();
database.link(models);
await database.sync({ drop: true });
