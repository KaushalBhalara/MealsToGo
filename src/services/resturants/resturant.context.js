import React, {
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from "react";
import { resturantRequest, resturantTransfom } from "./resturants.service";
import { LocationContext } from "../locations/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retriveResturants = (loc) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      resturantRequest(loc)
        .then(resturantTransfom)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveResturants(locationString);
    }
  }, [location]);

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
