import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

import { Spacer } from "../../../components/spacer/spacercomponent";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/textcomponent";
import {
  Icon,
  ResturantCard,
  ResturantCardCover,
  Address,
  Info,
  RatingView,
  SectionView,
  OpenView,
} from "./resturantcardinfoStyle";

export const ResturantInfoCardComponent = ({ resturant = {} }) => {
  const {
    name = "Resturant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Some Random Address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="body">{name}</Text>
        <SectionView>
          <RatingView>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </RatingView>
          <OpenView>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={15} height={15} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </OpenView>
        </SectionView>

        <Address>{resturant.vicinity}</Address>
      </Info>
    </ResturantCard>
  );
};
