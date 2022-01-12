import React from "react";
import { Spacer } from "../../../components/spacer/spacercomponent";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../component/account.style";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
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
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Sign up")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
