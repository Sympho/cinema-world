import { UserModel } from '../models/mod.ts';
import { RouterContext } from '../deps.ts';

class UserController {
  public async getList({ response }: RouterContext) {
    const users: any = await UserModel.all();

    response.body = await users;
  }

  public async getItem({ params: { id }, response }: RouterContext) {
    const { password = '', ...user } =
      id && +id > 0 ? await UserModel.select('*').find(+id) : {};
    response.body = user;
  }

  public async createItem({ request, response }: RouterContext) {
    const { firstName, lastName, email, password } = await request.body().value;

    if (!request.hasBody || !firstName || !lastName || !email || !password) {
      response.status = 400;
      response.body = {
        success: false,
        message: 'No data provided',
      };
      return;
    }

    const { password: pass, ...user }: any = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    response.body = user;
    return;
  }
}

export default new UserController();
