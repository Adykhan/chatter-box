import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';




class Navbar extends Component {
  state = {

  }



  render() {
    const Link = this.props.auth.uid ? (<SignedInLinks profile={ this.props.profile } />) : (<SignedOutLinks />)

    return(
      <nav className="navbar navbar-default navbarCustomStyle noBorder">
        <div className="container">
          { Link }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
