import React, { createContext, useState } from "react";
import {useNavigate} from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const[isAuth,setIsAuth]=useState(false);

  const navigate=useNavigate()

  const login=()=>{
    setIsAuth(true);
    navigate("/home")
  }

  const logout=()=>{
    setIsAuth(false);
    navigate("/login")
  }
  return <AuthContext.Provider value={{isAuth,login,logout}}>
    {children}
    </AuthContext.Provider>;
};
