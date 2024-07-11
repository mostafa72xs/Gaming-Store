import { useState, createContext ,useContext } from "react";
import React from "react";

const LoginContext = createContext(undefined)

export const LoginProvider = ({children}) =>{

    const [Logined , setLogined] = useState(false)  

    return <LoginContext.Provider value={[Logined ,setLogined]}>
        {children}
    </LoginContext.Provider>
}

export const useLogin = () => useContext(LoginContext);