import { createServer } from "./graphql/apolloServer";

const apolloServer = createServer();

exports.graphqlHandler = apolloServer.createHandler({
  cors: {
    origin: "*",
  },
});
