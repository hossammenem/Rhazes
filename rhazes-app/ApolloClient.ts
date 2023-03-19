import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "https://rhazes.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
