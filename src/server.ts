import { GraphQLServer } from 'graphql-yoga';

const resolvers = {
  Query: {
    hello: (source: any, args: any, ctx: any) => {
      return `Hello ${args.name || 'World'}`;
    }
  }
};

export default new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers
});
