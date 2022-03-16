import React, { useSelector, useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { logout } from '../store/auth/auth.actions';

const Navbar = () => {
    const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
    const dispatch = useDispatch();

  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {isUserLoggedIn && (
        <button onClick={() => dispatch(logout())}>Logout</button>
        )}
    </div>
  )
}

export default Navbar