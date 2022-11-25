import { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app);

const MainContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unlink = onAuthStateChanged(auth, result => {
            if (result) {
                fetch(`https://phonex.vercel.app/user?email=${result.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setUser(data)
                        setLoading(false);
                    })
            } else {
                setUser(null)
            }
        })
        return () => unlink();
    }, [])

    const emailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const withGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
   

    const value = { emailPassword, withGoogle, user, login, loading, setLoading }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default MainContext;