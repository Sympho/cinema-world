import httpClient, { createCancel } from './httpClient';

import { register, RegisterUserFields } from './services/auth';
import * as movies from './services/movies';

export const auth = { register };

export type { RegisterUserFields };

export { httpClient, createCancel, movies };
