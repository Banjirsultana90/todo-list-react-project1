import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import  { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { axiosSecure } from '../../hook/useAxiosSecure';

// import axios from 'axios';

// import axios from 'axios';

// import useAxiosPublic, { axiosPublic } from '../base/useAxiosPublic';



export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [isloggedin, setIsLoggedIn] = useState(false);
    const [loading, setloading] = useState(true)
    const googleprovider = new GoogleAuthProvider()
    // const axiosPublic=useAxiosPublic()


    const googlelogin = () => {
        setloading(true)

        return signInWithPopup(auth, googleprovider)
    }
    const createuser = (email, password) => {
        setloading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleupdateprofile = (name, photo) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

    }
    const signin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            const userEmail = currentuser?.email;
                const loggeduser = { email: userEmail };
            setuser(currentuser);

            console.log('user in the auth state changed', currentuser);
            setloading(false);
            setIsLoggedIn(!!currentuser);
    
            if (currentuser) {
                axiosSecure.post('/jwt', loggeduser, { withCredentials: true })
                    .then((res) => {
                        console.log(res.data);
                    });
                    setloading(false)
            } 
            else {
                axiosSecure.post('/logout', loggeduser, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                    });
                    setloading(false)
            }
        });
    
        return () => {
            unsubscribe();
        };
    }, []);
    
    const authinfo = {
        googlelogin,
        createuser, user, loading, handleupdateprofile, signin, logout,isloggedin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;