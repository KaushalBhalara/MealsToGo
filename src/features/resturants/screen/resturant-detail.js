import React from "react";
import { ResturantInfoCardComponent } from "../component/resturantinfocard.component";

export const ResturantDetail = ({ route }) => {
  const { resturant } = route.params;
  return <ResturantInfoCardComponent resturant={resturant} />;
};
