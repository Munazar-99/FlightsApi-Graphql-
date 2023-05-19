 export const typeDefs = `
  type Puppy {
    id:    Int
    breed: String
    name:  String
    img: String
    DOB:   String
  }
  input PuppyInput{
    id:    Int
    breed: String
    name:  String
    img: String
    DOB:   String
  }
  type Query {
    puppies: [Puppy]
    getPuppy(inputId: Int): Puppy
  }
  type Mutation {
    addPuppy(inputBody: PuppyInput!): [Puppy]
    updatePuppy(inputBody: PuppyInput!): [Puppy]
  }
`;