import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ResturantScreen } from "../../features/resturants/screen/resturantscreen";
import { Text } from "react-native";
import { ResturantNavigator } from "./rasturant.navigation";

const TAB_ICON = {
  Resturants: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};

const Tab = createBottomTabNavigator();

const SettingsScreen = () => <Text>Settings</Text>;

const MapScreen = () => <Text>Map</Text>;

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} color={color} size={size} />
    ),
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Resturants"
        component={ResturantNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
