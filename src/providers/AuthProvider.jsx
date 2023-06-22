import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sign Up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // LogOut
    const logOut = () => {
        return signOut(auth);
    }


    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Github Login

    const githublogin = () => {
        return signInWithPopup(auth, githubProvider);
    }






    // Observe On State Changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        // Stop Obbserving While Unmounting
        return () => {
            return unsubscribe();
        }
    }, [])


    // Auth Send by Context
    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        loading,
        googleLogin,
        githublogin

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;