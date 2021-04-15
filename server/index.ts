import { Application } from './deps.ts';
import Router from './routes/Router.ts';

const app = new Application();

// Logger
app.use(async ({ request: { method, url } }, next) => {
  await next();
  console.log(`${method} ${url}`);
});

app.use(Router.routes());
app.use(Router.allowedMethods());

await app.listen({ port: 5000 });
