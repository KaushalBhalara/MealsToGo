import React, { useState, createContext } from "react";
import { LoginRequest } from "./authrntication.service";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLoading(false);
        setUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(error.message.toString());
        setIsLoading(false);
        setError(error.toString());
        console.log(error.message);
      });
    // LoginRequest(email, password)
    //   .then((u) => {
    //     setIsLoading(false);
    //     setUser(u);
    //   })
    //   .catch((e) => {
    //     setIsLoading(false);
    //     setError(e);
    //     setError(e.toString());
    //   });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        error,
        isAuthenticated: !!user,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
