import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
   
    const loginUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)
    }


    const logOut = () =>{
        return signOut(auth)
    }

    const handlerForgete = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }
   
      useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser);
        });
        return () => {
            unsubsCribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser, 
        googleSignin,
        loading,
        loginUser,
        handlerForgete,
        logOut,
        updateUser,

    }

    return (
        <div>
               <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;