import React from 'react'
import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import {signOut } from "firebase/auth";

export const Navbar = () => {
  const [ user ] = useAuthState(auth);
  const signOutUser = async () => {
    await signOut(auth);
  };
  return (
    <div className='navbar'>
      <div className='navContent'>
        <Link to="/"> Home </Link>
        {!user ? <Link to="/login"> Login </Link>  :     
        <Link to="/createpost"> Create Post </Link>}
        {user && 
        <>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} width="30" height="30" />
          <button onClick={signOutUser}> Log Out </button>
        </>}
      </div>
    </div>
  )
}

export default Navbar