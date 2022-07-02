import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Auth from "../screens/Auth/Auth";
import { AuthScreen } from "../screens/Auth";
const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};
