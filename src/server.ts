import { GraphQLServer } from 'graphql-yoga';

import ItemsQuery from './resolvers/Query/ItemsQuery';
import ItemMutation from './resolvers/Mutation/ItemMutation';
import database from './database/postgres';

const Query = ItemsQuery(database);
const Mutation = ItemMutation(database);

const resolvers: any = {
  Query,
  Mutation
};

export default new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers
});
