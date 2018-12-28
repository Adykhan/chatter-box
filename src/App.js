import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Custom Component
import Navbar from './app/components/layout/Navbar';
import SignIn from './app/components/auth/SignIn';
import SignUp from './app/components/auth/SignUp';
import Dashboard from './app/components/dashboard/Dashboard';
import Chatbox from './app/components/chatbox/Chatbox';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={ Navbar } />
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/signin' component={ SignIn } />
                <Route path='/Signup' component={ SignUp } />
                <Route exact path='/' component={ Dashboard } />
                <Route path='/chat/:uid' component={ Chatbox } />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
