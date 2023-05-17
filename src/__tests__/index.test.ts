
import { ApolloServer } from "@apollo/server";
import assert from "assert";
import { typeDefs } from "../schema";
import { Query } from "../resolvers/Query";
import { Mutation } from "../resolvers/Mutation";


const testServer = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    },
});

it('returns all the puppies in Elastic Cloud', async () => {

    const response = await testServer.executeOperation({
        query: `query {
                    puppies {
                        breed
                        name
                        id
                        img
                        DOB
                    }
                }`
    });
 
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.puppies).toHaveLength(10);
});

it('returns single puppy through Id', async () => {

    const response = await testServer.executeOperation({
        query: `query  {
            getpuppy(inputId:10) {
              breed
              name
              img
              id
              DOB
            }
          }`
    });
    console.log('munazar', response.body)
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.getpuppy).toHaveProperty('name', 'Alfonsa');
});