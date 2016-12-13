import React from 'react';
import LoginForm from './login-form';
import { Link } from 'react-router';

const LogIn = (props) => {
  return (
    <div className="login-container">
      <div className="top-login">
        <div className="login-logo">
          <img src="/imgs/Logo.png" height="94" width="250"/>
        </div>
        <LoginForm />
      </div>
      <div className="bottom-buttons">
        <i className="fa fa-lock" style={{"margin-right": "5px", "color": "#fff", "text-align": "center"}}/>
        <Link className="forget-pass-link" to="/">Forget password</Link>
        <Link className="register-link" to="/">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
}

export default LogIn;
