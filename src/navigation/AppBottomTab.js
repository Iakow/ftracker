import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { TransactionsListScreen } from "../screens/List";
import { TransactionScreen } from "../screens/Transaction";
import { UserProfileScreen } from "../screens/UserProfile";

const Tab = createBottomTabNavigator();

export const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Main"
        component={TransactionsListScreen}
        options={{
          title: "List",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="view-list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-circle" size={34} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
