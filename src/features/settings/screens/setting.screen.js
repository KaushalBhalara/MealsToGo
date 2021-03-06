import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacercomponent";
import { Text } from "../../../components/typography/textcomponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const AvtarContainer = styled.View`
  align-items: center;
`;

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [isPhoto, setPhoto] = useState(null);

  const getUserProfile = async (currentUser) => {
    const photurl = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photurl);
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserProfile(user);
    }, [user])
  );

  return (
    <>
      <AvtarContainer>
        <Spacer position="top" size="large" />
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!isPhoto && (
            <Avatar.Icon size={160} icon="human" backgroundColor="#2182BD" />
          )}
          {isPhoto && (
            <Avatar.Image
              size={160}
              source={{ uri: isPhoto }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
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
          onPress={() => navigation.navigate("Favourites")}
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
