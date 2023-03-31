import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const origin =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://rhazes.vercel.app";

const client = new ApolloClient({
  uri: `${origin}/api/graphql/`,
  cache: new InMemoryCache(),
});

export default client;
