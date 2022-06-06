import React, { useContext } from "react";
import Home from "../../pages/Home";
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,logout}=useContext(AuthContext);

  const navigate=useNavigate();

  const hanleLogin=()=>{

    if(isAuth){
        logout();
    }
    else{
      navigate('/login')
    }
    
  }
  return (
    <div data-cy="navbar" style={{display:'flex',justifyContent:'space-around', backgroundColor:"lightgreen",height:'30px'}}>
      <Link data-cy="navbar-home-link" to="/" >Home</Link>
      <span data-cy="navbar-cart-items-count">Cart</span>
      <button data-cy="navbar-login-logout-button" onClick={hanleLogin}>{ isAuth ?"Logout":"Login"}</button>

    </div>
  );
};

export default Navbar;
