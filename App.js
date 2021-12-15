import { StatusBar as ExpoStausBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { ResturantScreen } from "./src/features/resturants/screen/resturantscreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/globaldata/theme";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantScreen />
      </ThemeProvider>
      <ExpoStausBar style="auto" />
    </>
  );
}
