import { puppies } from "../database";
import { client } from "../elasticsearch";

export const Mutation = {
    addPuppy: async(parent,args,contxt) => {
        const response =await client.index({
          index: 'puppies',
          id: args.inputBody.id,
          document: args.inputBody
        })
        return puppies
    },
    updatePuppy: async(parent,args,contxt) => {
        const response =await client.index({
          index: 'puppies',
          id: args.inputBody.id,
          document: args.inputBody
        })
        return puppies
    }
  }