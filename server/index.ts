import { Application, oakCors } from './deps.ts';
import Router from './routes/Router.ts';

const app = new Application();

const sleep = (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

// CORS for localhost:3000
app.use(
  oakCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    maxAge: 1000,
  }),
);

// Logger
app.use(async ({ request: { method, url } }, next) => {
  await sleep(500);
  await next();
  console.log(`${method} ${url}`);
});

app.use(Router.routes());
app.use(Router.allowedMethods());

await app.listen({ port: 5000 });
