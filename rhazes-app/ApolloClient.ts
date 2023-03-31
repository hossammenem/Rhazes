import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const origin = "https://rhazes.vercel.app"
  ? process.env.NODE_ENV === "development"
  : "http://localhost:3000";

const client = new ApolloClient({
  uri: `${origin}/api/graphql/`,
  cache: new InMemoryCache(),
});

export default client;
