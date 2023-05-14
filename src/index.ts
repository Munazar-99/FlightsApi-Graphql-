import { Query } from './resolvers/Query';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { puppies } from './database';
import { typeDefs } from './schema';

const server = new ApolloServer({
    typeDefs,
    resolvers:{
      Query
    },
  });
  

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);