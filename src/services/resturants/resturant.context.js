import React, { useState, useEffect, createContext, useMemo } from "react";
import { resturantRequest, resturantTransfom } from "./resturants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveResturants = () => {
    setLoading(true);
    setTimeout(() => {
      resturantRequest("51.219448,4.402464")
        .then(resturantTransfom)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    });
  };
  useEffect(() => {
    retriveResturants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        error,
        isLoading,
        restaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
