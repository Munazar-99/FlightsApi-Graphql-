import { puppies } from "../database";

export const Query = {
    puppies: () => puppies,
    puppy: (parent, args, context) => puppies.find(book => book.id === args.input)
  }