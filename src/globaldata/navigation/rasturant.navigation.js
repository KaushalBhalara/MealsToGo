import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ResturantScreen } from "../../features/resturants/screen/resturantscreen";
import { ResturantDetail } from "../../features/resturants/screen/resturant-detail";

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
        component={ResturantDetail}
      />
    </ResturantStack.Navigator>
  );
};
