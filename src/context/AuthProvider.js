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
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [userinfo, setUserinfo] = useState({});
  const [theme, setTheme] = useState("dark");
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const {
    data: userinfo,
    isLoading: userLoading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["profileUpdate", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://gamespace-server.vercel.app/profileUpdate/${user?.email}`
      );
      return data;
    },
  });

  const googleProvider = new GoogleAuthProvider();
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const facebookProvider = new FacebookAuthProvider();
  const facebookSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
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
    theme,
    userinfo,
    userLoading,
    userRefetch,
    setTheme,
    createUser,
    googleSignin,
    facebookSignin,
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
