import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/setting.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.setting";

const SettingStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      headermode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        options={{}}
        name="App Settings"
        component={SettingsScreen}
      />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingStack.Navigator>
  );
};
