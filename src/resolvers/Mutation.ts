import { puppies } from "../database";
import { client } from "../elasticsearch";

export const Mutation = {
    addPuppy: async(parent,args,contxt) => {
        const response =await client.index({
          index: 'puppies',
          document: args.inputBody
        })
        return puppies
    }
  }