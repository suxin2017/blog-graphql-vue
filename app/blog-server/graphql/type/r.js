import { gql } from "apollo-server";

const typeDef = gql`
  interface Result {
      result Int
  }
`;

export {typeDef}