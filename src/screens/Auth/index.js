import {
  StyleSheet,
  Button,
  View,
  Alert,
  Platform,
  Text,
  SafeAreaView,
} from "react-native";
import * as AuthSession from "expo-auth-session";
import * as Random from "expo-random";
import jwtDecode from "jwt-decode";
import {
  AUTH_CLIENT_ID,
  AUTH_DOMAIN,
  ID_TOKEN_KEY,
  AUTH_NAMESPACE,
} from "../../../config";
import { useEffect, useState, useCallback, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const generateNonce = () =>
  String.fromCharCode.apply(null, Random.getRandomBytes(16));

const useProxy = Platform.select({ default: false });

const redirectUri = AuthSession.makeRedirectUri({ useProxy });
// Alert.alert(redirectUri);

export const AuthScreen = () => {
  const { onLogin } = useContext(AuthContext);

  const [originalNonce] = useState(generateNonce());
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: AUTH_CLIENT_ID,
      responseType: "id_token",
      scopes: ["openid", "profile", "email"],
      extraParams: {
        nonce: originalNonce,
      },
    },
    { authorizationEndpoint: `${AUTH_DOMAIN}/authorize` }
  );

  const checkNonce = async (token) => {
    const decodedToken = jwtDecode(token);

    if (originalNonce === decodedToken.nonce) {
      onLogin(token);
    } else {
      Alert.alert("Error", "Nonces don't match");
    }
  };

  useEffect(() => {
    if (result?.error) {
      Alert.alert(
        "Authentication error",
        result.params.error_description || "something went wrong"
      );
    }

    if (result?.type === "success") {
      checkNonce(result.params?.id_token);
    }
  }, [result]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button
        title="Login"
        onPress={() => {
          promptAsync({ useProxy, showInRecents: true });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  color: "red",
  fontSize: 18,
  fontWeight: "bold",
});
