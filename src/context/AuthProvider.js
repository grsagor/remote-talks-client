import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
     }

     const LogIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogIn=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
     }
     const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = userInfo => {
        return updateProfile(auth.currentUser, userInfo);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])
    
    const authInfo = {
        createUser,
        LogIn,
        user,
        logOut,
        googleLogIn,
        loading,
        setLoading,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;