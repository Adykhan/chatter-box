import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return(
    <>
      <NavLink className="navbar-brand" to="/">Logo</NavLink>
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <NavLink className="nav-link" to="/signin">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Signup</NavLink>
        </li>
      </ul>
    </>
  );
}


export default SignedOutLinks;
