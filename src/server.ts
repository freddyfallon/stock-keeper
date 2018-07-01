import { GraphQLServer } from 'graphql-yoga';

import Mutation from './resolvers/Mutation';
import ItemsQuery from './resolvers/Query/ItemsQuery';
import database from './database/postgres';

const Query = ItemsQuery(database);

const resolvers: any = {
  Query,
  Mutation
};

export default new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers
});
