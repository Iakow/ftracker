import React, { useState, useContext, createContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { AUTH_NAMESPACE, ID_TOKEN_KEY } from "../../config";
import jwtDecode from "jwt-decode";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // TODO try useReducer
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const checkLocalToken = async () => {
      const localToken = await SecureStore.getItemAsync(ID_TOKEN_KEY);

      if (localToken) {
        // CHECK TOKEN
        const decodedToken = jwtDecode(localToken);
        const { exp, sub: id, name } = decodedToken;
        if (exp > Math.floor(new Date().getTime()) / 1000) {
          // SET SESSION + LOADING === false
          setToken(localToken);
          setUser({
            id,
            isNew: decodedToken[AUTH_NAMESPACE].isNewUser,
          });
          setIsLoggedIn(true);
          setLoading(false);
        } else {
          // CLEAR STORAGE + CLEAR SESSION + LOADING === false
          await SecureStore.deleteItemAsync(ID_TOKEN_KEY);
          setToken(null);
          setUser(null);
          setIsLoggedIn(false);
          setLoading(false);
        }
      } else {
        console.log("no token");
        // LOADING === false
        setToken(null);
        setUser(null);
        setIsLoggedIn(false);
        setLoading(false);
      }
      ``;
    };
    checkLocalToken();
  }, []);

  const onLogout = async () => {
    // CLEAR STORAGE + CLEAR SESSION + LOADING === false
    await SecureStore.deleteItemAsync(ID_TOKEN_KEY);
    setIsLoggedIn(false);
    setLoading(false);
    setToken(null);
    setLoading(false);
  };

  const onLogin = async (newToken) => {
    console.log("onLogin");
    // SET STORAGE + SET SESSION + LOADING === false
    await SecureStore.setItemAsync(ID_TOKEN_KEY, newToken);
    const decodedToken = jwtDecode(newToken);
    const { sub: id, name } = decodedToken;
    setIsLoggedIn(true);
    setUser({
      id,
      isNew: decodedToken[AUTH_NAMESPACE].isNewUser,
    });
    setToken(newToken);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, token, loading, onLogin, onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
