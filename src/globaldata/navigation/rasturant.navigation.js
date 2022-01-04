import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";
import { ResturantScreen } from "../../features/resturants/screen/resturantscreen";

const ResturantStack = createStackNavigator();

export const ResturantNavigator = () => {
  return (
    <ResturantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <ResturantStack.Screen name="Resturant" component={ResturantScreen} />
      <ResturantStack.Screen
        name="ResturantDetail"
        component={() => <Text>ResturantDetails</Text>}
      />
    </ResturantStack.Navigator>
  );
};
