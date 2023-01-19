import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user ,setUser] = useState("");

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
     }

     const LogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogIn=(provider)=>{
        return signInWithPopup(auth,provider);
     }
     const logOut = () => {
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [])
    
    const authInfo = {createUser,LogIn,user,logOut,googleLogIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;