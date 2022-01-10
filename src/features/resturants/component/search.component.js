import React, { useState, useEffect, useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]}; ;
`;

export const SearchComponent = ({
  isFavouritesToggled,
  onFavouritesToggle,
}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      ></Searchbar>
    </SearchContainer>
  );
};
