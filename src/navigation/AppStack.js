import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TransactionScreen } from "./../screens/Transaction";
import { MainScreen } from "./../screens/Main";
import {
  TransactionsListScreen,
  VisualizationScreen,
} from "../screens/Statistics";
import { Button, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserProfileScreen } from "../screens/UserProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const StatisticsBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen name="List" component={TransactionsListScreen} />

      <Tab.Screen name="Visualization" component={VisualizationScreen} />
    </Tab.Navigator>
  );
};

const SettingsDrawer = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="User" component={UserProfileScreen} />
    </Drawer.Navigator>
  );
};

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Statistics" component={StatisticsBottomTabs} />
        <Stack.Screen name="Settings" component={UserProfileScreen}/>
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Transaction" component={TransactionScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
