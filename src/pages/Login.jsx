import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate=useNavigate()

  const [loginCred,setLoginCred]=useState({});

  const {login}=useContext(AuthContext);

  const handleOnChange=(e)=>{

    
    const {name,value}=e.target;
    setLoginCred({
      ...loginCred,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    login();
  }

  return (
    <div style={{display:'flex',flexDirection:'column',maxWidth:'200px',margin:'auto',gap:'10px'}}>
      Login : 
      <form onSubmit={handleSubmit}>
      <input data-cy="login-email" placeholder="email" name="email" onChange={handleOnChange} />
      <input data-cy="login-password" placeholder="Enter Paasword" type="password" name="password" onChange={handleOnChange}/>
      <button data-cy="login-submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Login;
