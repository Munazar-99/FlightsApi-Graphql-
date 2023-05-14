import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';


const app = express();
const port = 3000;

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'Hello',
        fields: () => ({
            message: { type:GraphQLString }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql:true,
}))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});