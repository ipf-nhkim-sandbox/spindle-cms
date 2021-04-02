const { ApolloServer } = require("apollo-server-lambda");

import graphqlSchema from ".";
const { typeDefs, resolvers } = graphqlSchema;

export const createServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ event, context }) => ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    }),
    playground: {
      endpoint: "/graphql",
    },
  });
};
