import React, { useContext } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfoCardComponent } from "../component/resturantinfocard.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacercomponent";
import {
  RestaurantsContext,
  RestaurantsContextProvider,
} from "../../../services/resturants/resturant.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]}; ;
`;

const ResturantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]}; ;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

const ResturantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const ResturantScreen = () => {
  const resturantcontext = useContext(RestaurantsContext);
  console.log(resturantcontext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar></Searchbar>
      </SearchContainer>
      <ResturantList
        data={resturantcontext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <ResturantInfoCardComponent />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
