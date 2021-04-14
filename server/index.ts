import { Application } from './deps.ts';
import Router from './routes/Router.ts';

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(Router.routes());
app.use(Router.allowedMethods());

await app.listen({ port: 5000 });
