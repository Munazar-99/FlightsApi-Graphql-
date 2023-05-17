import { puppies } from "../database";
import { client } from "../elasticsearch";
import Model from "../model";

export const Query = {
    puppies: async() => {
       const response =  await client.search({
            index: "puppies",
            query: { match_all: {} },
            size:20
        });
        return response?.hits.hits.map(puppy=> puppy._source)
    },
    getPuppy: async(parent, args, context) => {
        const {_source} = await client.get({
            index:'puppies',
            id: args.inputId
          })
        return _source
    }
  }