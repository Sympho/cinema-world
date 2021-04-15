import { Database, SQLite3Connector } from '../deps.ts';

const connector = new SQLite3Connector({
  filepath: 'server/cinema.db',
});

const database = new Database({ connector, debug: true });

export { database };
