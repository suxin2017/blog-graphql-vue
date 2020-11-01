import { gql } from "apollo-server";

const typeDef = gql`
  type Query {
    books: [Book]
  }
  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

export {typeDef}