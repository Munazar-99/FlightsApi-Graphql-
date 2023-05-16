import { puppies } from "../database";
import { client } from "../elasticsearch";
import Model from "../model";

export const Query = {
    puppies: async() => {
      await client.indices.refresh({ index: 'puppies' })
       const response =  await client.search({
            index: "puppies",
            query: { match_all: {} },
            size:20
        });
        console.log(response?.hits.hits.map(puppy=> puppy._source).length)
        return response?.hits.hits.map(puppy=> puppy._source)
    },
    getpuppy: async(parent, args, context) => {
      await client.indices.refresh({ index: 'puppies' })
        const {_source} = await client.get<Model>({
            index:'puppies',
            id: args.inputId
          })
        return _source
    }
  }