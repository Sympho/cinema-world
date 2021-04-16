import { RouterContext } from '../deps.ts';

class AuthController {
  public async login({ response }: RouterContext) {
    response.body = {
      message: 'login',
    };
  }

  public async register({ response }: RouterContext) {
    response.body = {
      message: 'register',
    };
  }

  public async forgotPassword({ response }: RouterContext) {
    response.body = {
      message: 'forgotPassword',
    };
  }
}

export default new AuthController();
