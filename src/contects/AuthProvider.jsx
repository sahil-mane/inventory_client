import { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [ user , setUser ] = useState(null);
    const [  loading , setLoading ] = useState(true);

    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const loginwithGoogle = () =>{
      setLoading(true);
      return signInWithPopup(auth , provider)
    }

    const login = (email , password) =>{
      setLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut = () =>{
      return signOut(auth)
    }

    useEffect(()=>{
      const unsubcribe = onAuthStateChanged(auth , currentUser =>{
        console.log(currentUser)
        setUser(currentUser);
        setLoading(false);
      });
      return ()=>{
        return unsubcribe();
      }
    },[])

    const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut
    }
    
  return (
    <AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider