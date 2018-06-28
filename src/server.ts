import { GraphQLServer } from 'graphql-yoga';

import Mutation from './resolvers/Mutation';

const resolvers: any = {
  Mutation
};

export default new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers
});
