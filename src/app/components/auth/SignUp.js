import React, { Component } from 'react';

class SignUp extends Component {
  state = {

  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log("Signed Up");
  }


  render() {
    return(
      <>
        <div className="col-md-7"></div>
        <div className="col-md-5 SignUp">
          <form onSubmit={ this.submitHandler } className="">
            <h3 className="mainHeading">Sign Up <span className="pull-right"></span></h3>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="mNumber">Mobile Number: </label>
              <input type="text" className="form-control" id="mNumber"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input type="password" className="form-control" id="password"/>
            </div>
            <button type="reset" className="btn btn-default">Reset</button>
            <button type="submit" className="btn btn-info">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
