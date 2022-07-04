import { StyleSheet, Text, Button, SafeAreaView, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ALL_TRANSACTIONS } from "../../../graphql/queries";
import { AuthContext } from "../../../providers/AuthProvider";
import { ListItem } from "./ListItem";
import { FAB } from "../../../components/FAB";

const Bomb = () => {
  useEffect(() => {
    throw new Error("Booom!");
  });

  return <Text>Boom</Text>;
};

export function TransactionsListScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const { loading, error, data } = useQuery(ALL_TRANSACTIONS, {
    variables: { userId: user?.id },
  });

  const [x, setX] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      {error && <Text>{error?.message}</Text>}
      {loading && <Text style={{ flex: 1 }}>Loading transactions...</Text>}
      {data && (
        <FlatList
          data={data?.transactions}
          renderItem={({ item }) => <ListItem data={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
      {x && <Bomb />}

      <FAB
        onPress={() => {
          navigation.navigate("Transaction");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    width: "100%",
    marginVertical: 10,
  },
  button: {
    width: "30%",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  main: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
});
