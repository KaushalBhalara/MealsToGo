import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const LoginRequest = ({ email, password }) => {
  signInWithEmailAndPassword(getAuth(), email, password);
};
