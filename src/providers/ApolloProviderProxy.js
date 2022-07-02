import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { GRAPHQL_ENDPOINT } from "../../config";
import { AuthContext } from "./AuthProvider";

export const ApolloProviderProxy = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [client, setClient] = useState(
    new ApolloClient({
      uri: GRAPHQL_ENDPOINT,
      cache: new InMemoryCache(),
    })
  );

  useEffect(() => {
    console.log("ApolloProviderProxy");
    setClient(
      new ApolloClient({
        uri: GRAPHQL_ENDPOINT,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        cache: new InMemoryCache(),
      })
    );
  }, [token]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
