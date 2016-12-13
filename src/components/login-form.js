import React from 'react';
import FacebookLogin from './FacebookLogin';

const LoginForm = (props) => {
  return (
    <form>
      <div className="form-placeholder">
        <div className="facebook-placeholder">
          <FacebookLogin
            appId="479575668894501"
            xfbml={true}
            callback={(response) => console.log(response)}
            onFacebookResponse={response => console.log(response)} />
        </div>
        <span className="separator">- or -</span>
        <input type="text" className="inputs" placeholder="Username or Email" />
        <input type="password" className="inputs"placeholder="Password" />
        <div className="login-submit" onClick={() => console.log("Submit")}>
          <span className="login-btn-title">Log In</span>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
