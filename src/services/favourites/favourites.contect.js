import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value, uid) => {
    try {
      // console.log("uid", uid);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("Save Error Fav ", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      // console.log("uid", uid);
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Load Error Fav", e);
    }
  };

  const add = (resturant) => {
    setFavourites([...favourites, resturant]);
  };

  const remove = (resturant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== resturant.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      // console.log("uid", uid);
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      // console.log("uid", uid);
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
