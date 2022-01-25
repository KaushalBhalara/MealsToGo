import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.contect";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacercomponent";
import { ResturantInfoCardComponent } from "../../resturants/component/resturantinfocard.component";
import { Text } from "../../../components/typography/textcomponent";

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavouritesArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <ResturantList
      data={favourites}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ResturantDetail", {
              resturant: item,
            })
          }
        >
          <Spacer position="bottom" size="large">
            <ResturantInfoCardComponent resturant={item} />
          </Spacer>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <>
      <NoFavouritesArea>
        <Text variant="label">No Favourites</Text>
      </NoFavouritesArea>
    </>
  );
};
