import React from "react";
import { Spacer } from "../../../components/spacer/spacercomponent";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationContainer,
} from "../component/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <Title>Meals to Go</Title>
      <AccountCover />
      <AnimationContainer>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationContainer>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Sign up")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
