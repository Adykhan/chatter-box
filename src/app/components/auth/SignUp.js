import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    newUser: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.signUp(this.state.newUser);
  }
  changeHandler = (e) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.id]: e.target.value
      }
    });
  }


  render() {
    return(
      <>
        <div className="col-md-7"></div>
        <div className="col-md-5 SignUp">
          <form onSubmit={ this.submitHandler } className="">
            <h3 className="mainHeading">Sign Up <span className="pull-right"></span></h3>
            <div className="form-group">
              <label htmlFor="name">First Name: </label>
              <input type="text" className="form-control" id="firstName" onChange={ this.changeHandler } />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <input type="text" className="form-control" id="lastName" onChange={ this.changeHandler } />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" className="form-control" id="email" onChange={ this.changeHandler } />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" className="form-control" id="password" onChange={ this.changeHandler } />
            </div>
            <button type="reset" className="btn btn-default">Reset</button>
            <button type="submit" className="btn btn-info">Submit</button>
            <br/><br/>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
