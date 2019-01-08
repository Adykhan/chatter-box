import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { auth } = this.props;

    if(auth.uid) {
      return(<Redirect to='/' />)
    }

    return(
      <>
        <div className="col-md-7"></div>
        <div className="col-md-5">
          <form onSubmit={ this.submitHandler }>
            <h3>Login</h3>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" className="form-control" id="email" onChange={ this.changeHandler }/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" className="form-control" id="password" onChange={ this.changeHandler }/>
            </div>
            <button className="btn btn-info">Login</button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: creds => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
