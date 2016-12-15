import React from 'react';
import FacebookLogin from './FacebookLogin';
import { browserHistory } from 'react-router';

const {
  Component
} = React;

class LoginForm extends Component {
  render(){
    return (
      <form>
        <div className="form-placeholder">
          <div className="facebook-placeholder">
            <FacebookLogin
              appId="479575668894501"
              xfbml={true}
              callback={(response) => console.log(response)}
              onFacebookResponse={response => this.checkResponse(response)} />
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

  checkResponse(response) {
    console.log(response);

    if (response.status == "connected") {
      browserHistory.push('/home');
    }

  }
}

export default LoginForm;
