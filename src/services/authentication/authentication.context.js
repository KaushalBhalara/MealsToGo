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

  const dataReset = () => {
    setError(null);
  };

  const onLogin = (email, password) => {
    if (!email) {
      setError("Please Enter Email Id");
      return;
    } else {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        setError("Please Enter Valid Email Id");
        return;
      }
    }
    if (!password) {
      setError("Please Enter Password");
      return;
    }
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
        dataReset,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
