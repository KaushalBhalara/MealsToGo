import { StatusBar as ExpoStausBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/globaldata/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/globaldata/navigation";
const isAndroid = Platform.OS === "android";

const firebaseConfig = {
  apiKey: "AIzaSyCGKjrkDHrgT0vhZt0_dJ8cl_6cKWAWCbQ",
  authDomain: "mealtogo-fe3fa.firebaseapp.com",
  projectId: "mealtogo-fe3fa",
  storageBucket: "mealtogo-fe3fa.appspot.com",
  messagingSenderId: "737778028108",
  appId: "1:737778028108:web:3cec688ecdc74b9c742ee9",
  measurementId: "G-2L48G0FSCV",
};

initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const auth = getAuth();
  // useEffect(() => {
  //   setTimeout(() => {
  //     signInWithEmailAndPassword(auth, "Kaushal@gmail.com", "password")
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         // console.log(user.providerData[0].email);
  //         setIsAuthenticated(true);
  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorMessage);
  //       });
  //   }, 2000);
  // }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  // if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStausBar style="auto" />
    </>
  );
}
