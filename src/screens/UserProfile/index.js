import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
import { AuthContext } from "../../providers/AuthProvider";

export const UserProfileScreen = () => {
  const { onLogout, user } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text>Надо делать запрос в бд юзера</Text>
      <Text>{`user id: ${user.id}`}</Text>
      <View>
        <Button title="Logout" onPress={onLogout} />
      </View>
    </SafeAreaView>
  );
};
