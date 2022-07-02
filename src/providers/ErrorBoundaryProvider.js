import ErrorBoundary from "react-native-error-boundary";
// import { Text, Button, View } from "react-native";

const errorHandler = (error, stackTrace) => {
  /* Log the error to an error reporting service */
};

/*const CustomFallback = ({ error, resetError }) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{error.toString()}</Text>
    <Button onPress={resetError} title={"Try again"} />
  </View>
);*/

export const ErrorBoundaryProvider = ({ children }) => (
  <ErrorBoundary /*FallbackComponent={CustomFallback}*/ onError={errorHandler}>
    {children}
  </ErrorBoundary>
);
