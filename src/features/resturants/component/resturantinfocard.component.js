import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  padding: 10px;
  color: red;
`;

const ResturantCard = styled(Card)`
  background-color: white;
`;

const ResturantCardCover = styled(Card.Cover)`
  padding: 10px;
  background-color: white;
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

const styles = StyleSheet.create({
  cover: {
    padding: 10,
    backgroundColor: "white",
  },
});
