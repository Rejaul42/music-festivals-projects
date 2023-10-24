import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";


export const AuthContest = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleProvider = new GoogleAuthProvider();

    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoader(true)
        signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, createUser =>{
            setUser(createUser)
            setLoader(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signInUser,
        signInGoogle,
        logOut,
        loader
    }

    return (
        <AuthContest.Provider value={authInfo}>
            {children}
        </AuthContest.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;