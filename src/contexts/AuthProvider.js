import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
export const  AuthContext = createContext()
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const auth = getAuth(app);

//create a new user
const createNewUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password)
}

// log in user
const logInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

// update user profile
const updateUserProfile = name =>{
    return updateProfile(auth.currentUser,name);
}


// sign out user 
const logOutUser = () =>{
    return signOut(auth)
}



useEffect(()=>{
   
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false);
    })
    return ()=> unsubscribe();
},[])



const authInfo = {
    user,
    loading,
    createNewUser,
    logInUser,
    updateUserProfile,
    logOutUser,
}
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;