import { ApolloServer, gql } from 'apollo-server';
import  { application } from './application';

const schema = application.createSchemaForApollo();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});