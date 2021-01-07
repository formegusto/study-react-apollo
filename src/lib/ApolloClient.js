import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    // uri: "https://countries.trevorblades.com",
    uri: "http://localhost:4000/graphql"
});

export default client;