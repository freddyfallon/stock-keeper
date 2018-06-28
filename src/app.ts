import { GraphQLServer } from 'graphql-yoga';
import helmet from 'helmet';
import server from './server';

const { PORT = 3000 } = process.env;

server.express.use(helmet());

server
  .start({
    port: PORT
  })
  .then(http => {
    console.log(`GraphQL-server running on http://localhost:${PORT}`);
  })
  .catch(err => {
    console.error('Server start failed', err);
    process.exit(1);
  });
