import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppBottomTabs } from "./AppBottomTab";
import { TransactionScreen } from "../screens/Transaction";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={AppBottomTabs}
        options={{ title: "Transactions" }}
      />
      <Stack.Screen
        name="Add"
        component={TransactionScreen}
        options={{ title: "Edit transaction" }}
      />
    </Stack.Navigator>
  );
};
