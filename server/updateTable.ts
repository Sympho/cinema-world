import { database } from './core/Database.ts';

const { args } = Deno;

args.forEach(modelName => {
  import(`./models/${modelName}.ts`).then(async () => {
    // database.sync();
    await database.sync({ drop: true });
    database.close();
  });
});
