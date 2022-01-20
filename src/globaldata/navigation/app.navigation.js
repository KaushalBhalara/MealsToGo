import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ResturantScreen } from "../../features/resturants/screen/resturantscreen";
import { Text, Button } from "react-native";
import { ResturantNavigator } from "./rasturant.navigation";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../services/resturants/resturant.context";
import { LocationContextProvider } from "../../services/locations/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.contect";

const TAB_ICON = {
  Resturants: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <>
      <Text>Settings</Text>
      <Button title="Logout" onPress={() => onLogout()} />
    </>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={iconName} color={color} size={size} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
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
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: true }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
