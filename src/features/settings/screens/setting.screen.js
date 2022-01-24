import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacercomponent";
import { Text } from "../../../components/typography/textcomponent";

const AvtarContainer = styled.View`
  align-items: center;
`;

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;
export const SettingsScreen = () => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <>
      <AvtarContainer>
        <Spacer position="top" size="large" />
        <Avatar.Icon size={160} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvtarContainer>
      <List.Section>
        <SettingItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />
        <SettingItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </>
  );
};
