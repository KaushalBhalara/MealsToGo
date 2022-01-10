import React, { useContext } from "react";
import styled from "styled-components";
import { FavouritesContext } from "../../services/favourites/favourites.contect";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`;

export const Favourite = ({ resturant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === resturant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(resturant)
          : removeFromFavourites(resturant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
