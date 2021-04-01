const { gql } = require("apollo-server-lambda");
const { mergeResolvers } = require("@graphql-tools/merge");

import { BookTypeDefs } from "./type-defs";
import { BookResolvers } from "./resolvers";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

export default {
  typeDefs: [Query, Mutation, BookTypeDefs],
  resolvers: BookResolvers,
};
