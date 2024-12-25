import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import axios from "axios";



export const AuthContext = createContext('')


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        setLoader(true)
        return signInWithPopup( auth, googleProvider )
    }

    const handleRegister = ( email, password ) => {
        setLoader(true)
        return createUserWithEmailAndPassword( auth , email, password)
    }

    const handleSignIn = ( email, password ) =>{
        setLoader(true)
        return signInWithEmailAndPassword( auth, email, password)
    }

    const handleSignOut = () =>{
        setLoader(true)
        return signOut( auth )
    }

    const manageProfile = ( name, photo ) =>{
        return  updateProfile( auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const handleResetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth, (currentUser)=>{
            // console.log(currentUser)
            if( currentUser ){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            if(currentUser?.email){
                const userToken = {email : currentUser.email}
                axios.post('http://localhost:5000/jwt', userToken, {withCredentials : true})
                .then(res => {
                    console.log(res.data)
                    setLoader(false)
                })
            }
            else{
                axios.post('http://localhost:5000/logout', {}, {withCredentials: true})
                .then( res => {
                    console.log('logout',res.data)
                    setLoader(false)
                })
            }
            // setLoader(false)

            return () =>{
                unsubscribe()
            }
        })
    },[])

    const authInfo = {
        user,
        handleGoogleSignIn,
        handleRegister,
        handleSignIn,
        handleSignOut,
        manageProfile,
        loader,
        setUser,
        handleResetPassword
    }
    return (
        <AuthContext.Provider value={ authInfo }>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;