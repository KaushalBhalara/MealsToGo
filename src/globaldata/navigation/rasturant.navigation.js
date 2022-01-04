import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ResturantScreen } from "../../features/resturants/screen/resturantscreen";

const ResturantStack = createStackNavigator();

export const ResturantNavigator = () => {
  return (
    <ResturantStack.Navigator headerMode="none">
      <ResturantStack.Screen name="Resturant" component={ResturantScreen} />
    </ResturantStack.Navigator>
  );
};
