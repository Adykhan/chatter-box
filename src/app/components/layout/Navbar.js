import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-default navbarCustomStyle noBorder">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Logo</NavLink>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Link 1</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Link 2</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
