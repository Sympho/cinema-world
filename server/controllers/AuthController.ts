import { bcrypt, djwt, RouterContext } from '../deps.ts';
import { SALT } from '../config.ts';
import { UserModel } from '../models/mod.ts';

class AuthController {
  public async login({ request, response }: RouterContext) {
    const { login, password } = await request.body().value;

    if (!login || !password || !request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        code: 'INVALID_PARAMS',
      };
      return;
    }

    response.body = {
      message: [login, password],
    };
  }

  public async register({ request, response }: RouterContext) {
    const { firstName, lastName, email, password } = await request.body().value;

    if (!request.hasBody || !firstName || !lastName || !email || !password) {
      response.status = 400;
      response.body = {
        success: false,
        message: 'No data provided',
      };

      return;
    }

    if (!password || String(password).length < 8) {
      response.status = 400;
      response.body = {
        success: false,
        message: 'Password must be greater than 10 symbols.',
      };

      return;
    }

    const hashedPassword = await bcrypt.hash(password, SALT);

    const { id }: any = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const jwt = await djwt.create(
      { alg: 'HS512', typ: 'JWT' },
      { id: id, exp: djwt.getNumericDate(60 * 60 * 24) },
      SALT,
    );

    const {
      password: pass,
      accessToken,
      refreshToken,
      ...user
    }: any = await UserModel.where('id', id).update({
      accessToken: jwt,
      refreshToken: 'Tokyo',
    });

    response.body = {
      item: user,
      token: jwt,
    };
  }

  public async forgotPassword({ response }: RouterContext) {
    response.body = {
      message: 'forgotPassword',
    };
  }
}

export default new AuthController();
