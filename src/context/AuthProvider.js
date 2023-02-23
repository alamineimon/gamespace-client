import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
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

  //fetch data from mongodb
  const {
    data: userinfo,
    isLoading: userLoading,
    refetch: userRefetch,
  } = useQuery({
    queryKey: ["profileUpdate", user],
    queryFn: async () => {
      const { data } = await axios.get(`/profileUpdate/${user?.email}`);
      return data;
    },
  });
  //create user with email and pass
  const createUser = async (email, password, profile) => {
    await setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // await sendEmailVerification(auth.currentUser);
      })
      .catch((err) => console.log(err));
    await updateProfile(auth.currentUser, profile);
    const username = auth.currentUser;
    await setUser({ ...username });
    return username;
  };

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
    return signOut(auth)

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
