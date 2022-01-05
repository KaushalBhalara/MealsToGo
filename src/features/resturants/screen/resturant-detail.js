import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { ResturantInfoCardComponent } from "../component/resturantinfocard.component";

export const ResturantDetail = ({ route }) => {
  const [breakFastExpanded, setBreakFastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnedExpanded] = useState(false);
  const [drinksExpanded, setDrinkExpanded] = useState(false);

  const { resturant } = route.params;

  return (
    <>
      <ResturantInfoCardComponent resturant={resturant} />
      <ScrollView>
        <List.Accordion
          title="BreakFast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakFastExpanded}
          onPress={() => setBreakFastExpanded(!breakFastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnedExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinkExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </>
  );
};
