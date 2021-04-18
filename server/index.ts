import { Application, oakCors } from './deps.ts';
import Router from './routes/Router.ts';

const app = new Application();

const sleep = (time: number) => {
  return new Promise(resolve => setTimeout(() => resolve(true), time));
};

// Logger
app.use(async ({ request: { method, url } }, next) => {
  // await sleep(2000);
  await next();
  console.log(`${method} ${url}`);
});

// CORS for localhost:3000
app.use(
  oakCors({
    origin: 'http://localhost:3000',
  }),
);

app.use(Router.routes());
app.use(Router.allowedMethods());

await app.listen({ port: 5000 });
