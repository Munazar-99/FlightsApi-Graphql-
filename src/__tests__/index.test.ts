
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
            getPuppy(inputId:10) {
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
    expect(response.body.singleResult.data?.getPuppy).toHaveProperty('name', 'Alfonsa');
});
it('adds a puppy to te database', async () => {

    const response = await testServer.executeOperation({
        query: `mutation {
            addPuppy (inputBody:  {
                  id: 11,
                  breed:"Siberian husky",
                  name:"sheldon",
                  img: "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                  DOB: "2 April 2001"
              })
          }`
    });
    console.log('munazar', response.body)
    assert(response.body.kind === 'single');
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response.body.singleResult.data?.getPuppy).toHaveProperty('name', 'Alfonsa');
});