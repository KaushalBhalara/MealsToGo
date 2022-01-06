import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { SearchComponentMap } from "../component/search.component";
import styled from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";
import { RestaurantsContext } from "../../../services/resturants/resturant.context";

const Map = styled(MapView)`
    height:100%
    width:100%
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setlatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setlatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <>
      <SearchComponentMap></SearchComponentMap>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((resturant) => {
          return null;
        })}
      </Map>
    </>
  );
};
