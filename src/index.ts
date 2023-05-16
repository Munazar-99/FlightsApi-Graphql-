import { Mutation } from './resolvers/Mutation';
import { Query } from './resolvers/Query';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { client } from './elasticsearch';

const server = new ApolloServer({
    typeDefs,
    resolvers:{
      Query,
      Mutation
    },
  });
  

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);