import { RouterContext } from '../deps.ts';
import { MovieModel } from '../models/mods.ts';

class MovieController {
  public async getItems({ response }: RouterContext) {
    const movies: any = await MovieModel.all();

    response.body = {
      items: movies,
      meta: {
        total: 13,
        page: 2,
        per: 20,
      },
    };
  }

  public async getItem({ params: { id }, response }: RouterContext) {
    if (id && Number(id)) {
      response.body =
        id && +id > 0 ? await MovieModel.select('*').find(+id) : {};
    } else {
      response.status = 400;
      response.body = {
        success: false,
        message: 'Invalid id',
      };
    }
  }

  public async createItem({ request, response }: RouterContext) {
    const {
      title,
      originalTitle,
      alias,
      releasedOn,
      poster,
    } = await request.body().value;

    if (title && alias && releasedOn && poster) {
      response.body = await MovieModel.create({
        title,
        originalTitle,
        alias,
        releasedOn,
        poster,
      });
    } else {
      response.status = 400;
      response.body = {
        success: false,
        message: 'Invalid params',
      };
    }

    return;
  }
}

export default new MovieController();
