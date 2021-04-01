const { gql } = require("apollo-server-lambda");

export default gql`
  extend type Query {
    books(page: Int, limit: Int): [Book]
  }

  type Book {
    bid: String
    title: String
  }
`;
