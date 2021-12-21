import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ResturantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ResturantInfoCardComponent = ({ resturant = {} }) => {
  const {
    name = "Resturant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Some Random Address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;
  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </ResturantCard>
  );
};
