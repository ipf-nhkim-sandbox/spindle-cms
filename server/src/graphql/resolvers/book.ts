import { MockList } from "apollo-server-lambda";

export default {
  Query: {
    books: () => new MockList([6, 9]),
  },
  Book: () => ({
    bid: () => "book_01",
    title: () => "Castronaut",
  }),
};
