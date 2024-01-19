import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const [ user ] = useAuthState(auth);
  return (
    <div className='navbar'>
      <div className='navContent'>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} width="30" height="30" />
      </div>
        
    </div>
  )
}

export default Navbar