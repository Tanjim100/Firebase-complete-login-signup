import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/auth_init';

export const AuthContext = createContext(null);




const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const undsubscibe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user: ', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            undsubscibe();
        }
    }, [])

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        name: 'Hello world',
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



/**
 * 1. create context with null as default
 * 2. create provider 
 * 3. set a default value with someting (authInfo)
 * 4. [attention please !!!!]
 * 5. use AuthProvider in main.jsx
 * 6. Access the children inside the AuthProvider in the main.jsx 
 * 7. export AuthContext
 */