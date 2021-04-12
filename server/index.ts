import { Application } from './imports.ts';

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Hello World!
app.use(ctx => {
  ctx.response.body = 'Hello World!';
});

await app.listen({ port: 5000 });
