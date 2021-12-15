import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfoCardComponent } from "../component/resturantinfocard.component";
import styled from "styled-components";

const SearchContainer = styled.View`
  padding: 16px;
`;

const ResturantListContainer = styled.View`
  flex: 1;
  padding: 16px;
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
      <ResturantListContainer>
        <ResturantInfoCardComponent />
      </ResturantListContainer>
    </SafeArea>
  );
};
