import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfoCardComponent } from "../component/resturantinfocard.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacercomponent";

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
export const ResturantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar></Searchbar>
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <ResturantInfoCardComponent />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
