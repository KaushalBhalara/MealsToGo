import React, { useState, useEffect, useContext } from "react";
import { Spacer } from "../../../components/spacer/spacercomponent";

import {
  AccountBackground,
  AuthButton,
  AuthInput,
  AccountContainer,
  AccountCover,
  Title,
  ErrorContainer,
} from "../component/account.style";

import { Text } from "../../../components/typography/textcomponent";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, onLogin, dataReset } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <Title>Meals to Go</Title>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="emailAddress"
          keyboardType="email-address"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(u) => setPassword(u)}
        />
        <Spacer size="large" />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
      <Spacer size="large" />
      <AuthButton
        mode="contained"
        onPress={() => {
          dataReset();
          navigation.goBack();
        }}
      >
        Back
      </AuthButton>
    </AccountBackground>
  );
};
