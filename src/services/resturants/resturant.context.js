import React, { useState, useEffect, createContext, useMemo } from "react";
import { resturantRequest, resturantTransfom } from "./resturants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
