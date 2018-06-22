import { GraphQLServer } from 'graphql-yoga';

const { PORT = 3010 } = process.env;

const resolvers = {
  Query: {
    hello: (source: any, args: any, ctx: any) => {
      return `Hello ${args.name || 'World'}`
    },
  }
}

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers
});

server
  .start({
    port: PORT,
  })
  .then(http => {
    console.log(`GraphQL-server running on http://localhost:${PORT}`);
  })
  .catch(err => {
    console.error('Server start failed', err);
    process.exit(1);
  });