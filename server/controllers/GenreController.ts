import { RouterContext } from '../deps.ts';
import { GenreModel } from '../models/mods.ts';

class GenreController {
  public async getItems({ response }: RouterContext) {
    const genres: any = await GenreModel.all();

    response.body = {
      items: genres,
      meta: {
        total: 13,
        page: 2,
        per: 20,
      },
    };
  }

  public async getItem({ params: { id }, response }: RouterContext) {
    if (id && Number(id)) {
      const movieId = parseInt(id, 10);

      response.body = {
        id: movieId,
        message: 'getItem',
      };
    } else {
      response.status = 400;
      response.body = {
        success: false,
        message: 'Invalid id',
      };
    }
  }
}

export default new GenreController();
