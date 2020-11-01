// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against

import { gql } from "apollo-server";

// your data.
const typeDef = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }
  type User {
      id: ID
      name: String
      age: Int
      password: String
  }
`;

export {typeDef}