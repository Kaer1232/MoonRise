import { createContext, useState, PropsWithChildren, useEffect, useMemo } from "react";
import { IUser, TypeSetState } from "../../type";
import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCpDxDWRsJNSHNRC5Gf9mpwZTHGTuPbqcg",
    authDomain: "moon-8ca34.firebaseapp.com",
    projectId: "moon-8ca34",
    storageBucket: "moon-8ca34.appspot.com",
    messagingSenderId: "234010013417",
    appId: "1:234010013417:web:75f5b230796aeb93fc0a78",
    measurementId: "G-2WWE0T5P67"
  }
  initializeApp(firebaseConfig)
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

interface IContext {
    user: IUser | null;
    setUser: TypeSetState<IUser | null>;
    ga: Auth
    db: Firestore
}

const ga = getAuth()
export const AuthContext = createContext<IContext>({} as IContext)
export const storage = getStorage(app)

export const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() =>{
        const auth= getAuth()
        const unlisted = onAuthStateChanged(ga, authUser => {
            if(authUser)
            setUser(authUser?{
                id: authUser.uid,
                avatar: authUser.photoURL || 'null',
                name: authUser?.displayName || '',
                
            } : null)
        })
        return () => unlisted()
    },[])

    const values = useMemo(() => ({
        user,
        setUser,
        ga,
        db
    }), [user, ga, db])

    return <AuthContext.Provider value={{user, setUser, ga, db}}>
        {children}
    </AuthContext.Provider>
}
