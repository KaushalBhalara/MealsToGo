import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { CompactResturantCard } from "../../resturants/component/compact.resturantcard.component";

const MyText = styled.Text``;

export const MapCallout = ({ resturant }) => {
  return (
    <CompactResturantCard isMap resturant={resturant}></CompactResturantCard>
  );
};
