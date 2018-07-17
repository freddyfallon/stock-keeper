import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import server from './server';
import dotenv from 'dotenv';

import { checkDbConnection } from './database/postgres/connect';

dotenv.config();

const { PORT = 3000 } = process.env;

server.express.use(helmet());

checkDbConnection();

server
  .start({
    port: PORT
  })
  .then(() => {
    console.log(`GraphQL-server running on http://localhost:${PORT}`);
  })
  .catch((err: any) => {
    console.error('Server start failed', err);
    process.exit(1);
  });
