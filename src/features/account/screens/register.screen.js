import React, { useState, useContext } from "react";

import { Spacer } from "../../../components/spacer/spacercomponent";
import { ActivityIndicator, Colors } from "react-native-paper";
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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const { error, onLogin, dataReset, onRegistration, isLoading } = useContext(
    AuthenticationContext
  );

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
        <AuthInput
          label="Re - Password"
          value={repassword}
          textContentType="emailAddress"
          keyboardType="email-address"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(u) => setrePassword(u)}
        />
        <Spacer size="large" />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => onRegistration(email, password, repassword)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator
            animating={true}
            color={Colors.blue300}
          ></ActivityIndicator>
        )}
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
