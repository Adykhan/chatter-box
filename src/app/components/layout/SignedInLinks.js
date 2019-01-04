import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../store/actions/authActions'

const SignedInLinks = ({ profile, signOut }) => {

  const signOutHandler = (e) => {
    e.preventDefault();
    console.log();
    signOut();
  }

  return(
    <>
      <NavLink className="navbar-brand" to="/">{profile.firstName} {profile.lastName}</NavLink>
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <NavLink className="nav-link" to="/chats">Chatter Box</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/" onClick={ signOutHandler } >Logout</a>
        </li>
      </ul>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => { dispatch(signOut()) }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
