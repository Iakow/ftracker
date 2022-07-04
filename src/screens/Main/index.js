import { Text, Button, StyleSheet, View, TouchableOpacity } from "react-native";
import { FAB } from "../../components/FAB";
import { MaterialIcons } from "@expo/vector-icons";

export const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings")}
        style={{ alignSelf: "flex-start", padding: 10 }}
      >
        <MaterialIcons name="settings" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 60 }}>Balance</Text>
      <FAB onPress={() => navigation.navigate("Transaction")} />
      <Button onPress={() => navigation.navigate("Statistics")} title="Stats" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
