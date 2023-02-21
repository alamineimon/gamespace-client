import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { useSelector } from "react-redux";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { user: userFromRedux } = useSelector((state) => state.auth);
  console.log("fromRedux", userFromRedux?.email);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const {
    data: userinfo,
    isLoading: userLoading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["profileUpdate", userFromRedux?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `/profileUpdate/${userFromRedux?.email}`
      );
      return data;
    },
  });

  const googleProvider = new GoogleAuthProvider();
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const handlerForgete = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    userinfo,
    userLoading,
    userRefetch,
    createUser,
    googleSignin,
    loading,
    loginUser,
    handlerForgete,
    logOut,
    updateUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
