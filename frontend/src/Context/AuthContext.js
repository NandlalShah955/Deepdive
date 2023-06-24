import React,{useState} from 'react'


export const AuthContext=React.createContext();

function AuthContextProvider({children}) {
 const [isAuth, setisAuth] = useState(false);
 
 const toggleAuth=()=>{
    setisAuth(!isAuth);
 }

    return (
    <AuthContext.Provider value={{toggleAuth,isAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider