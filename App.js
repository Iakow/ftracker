import { LogBox, SafeAreaView, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Navigation } from "./src/navigation";
import { AuthProvider } from "./src/providers/AuthProvider";
import { ApolloProviderProxy } from "./src/providers/ApolloProviderProxy";
import { ErrorBoundaryProvider } from "./src/providers/ErrorBoundaryProvider";
import { Dimensions, PixelRatio, Platform, Alert } from "react-native";

// const { width, height } = Dimensions.get("window");

LogBox.ignoreAllLogs();

// need AppProvider with dimensions, fonts, styles, theme
// handle lost connection +“

export default function App() {
  // Alert.alert(`${width}, ${height}, ${PixelRatio.get()}`);
  return (
    <ErrorBoundaryProvider>
      <StatusBar style="dark" />
      
      <AuthProvider>
        <ApolloProviderProxy>
          <Navigation />
        </ApolloProviderProxy>
      </AuthProvider>
    </ErrorBoundaryProvider>
  );
}
