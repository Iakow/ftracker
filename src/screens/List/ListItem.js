import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ListItem = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate("Add", {
          data,
        });
      }}
    >
      <Text>{new Date(data.date).toString()}</Text>
      <Text>{data.sum}</Text>
      <Text>{data.category_name.name || "None"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    flex: 1,
    // width: "100%",
    height: 50,
    margin: 4,
    backgroundColor: "#e5e3e3",
    borderRadius: 6,
  },
});
