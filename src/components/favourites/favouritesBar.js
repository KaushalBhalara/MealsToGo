import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacercomponent";
import { Text } from "../typography/textcomponent";
import { CompactResturantCard } from "../../features/resturants/component/compact.resturantcard.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourite</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("ResturantDetail", {
                    resturant: restaurant,
                  })
                }
              >
                <CompactResturantCard resturant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
