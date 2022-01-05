import React from "react";
import MapView from "react-native-maps";
import { SearchComponentMap } from "../component/search.component";
import styled from "styled-components";

const Map = styled(MapView)`
    height:100%
    width:100%
`;

export const MapScreen = () => {
  return (
    <>
      <SearchComponentMap></SearchComponentMap>
      <Map></Map>
    </>
  );
};
