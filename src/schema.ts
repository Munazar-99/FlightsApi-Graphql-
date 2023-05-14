 export const typeDefs = `
  type Puppy {
    id:    Int
    breed: String
    name:  String
    img: String
    DOB:   String
  }
  type Query {
    puppies: [Puppy]
    puppy(input: Int): Puppy
  }
`;