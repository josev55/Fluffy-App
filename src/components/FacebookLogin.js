import React, { Component } from 'react';

class FacebookLogin extends Component {

  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: this.props.appId,
        xfbml: this.props.xfbml,
        cookie: this.props.cookie,
        version: 'v2.5',
      });

      if (this.props.autoLoad) {
        FB.getLoginStatus(this.checkLoginState);
      }
    };
    loadSDK(document, 'script', 'facebook-jssdk');
  }

  render() {
    return (
      <div className="facebook-btn" onClick={() => LogFacebook(this.props.onFacebookResponse)}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <i className="fa fa-facebook-official fa-2x"></i>
        <span className="facebook-title">Conéctate con Facebook</span>
      </div>
    );
  }
}

function LogFacebook(onFacebookResponse){
  FB.login(response => onFacebookResponse(response));
}

function loadSDK(d, s, id) {
  const element = d.getElementsByTagName(s)[0];
  const fjs = element;
  let js = element;
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/en_US' + '/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}

export default FacebookLogin;
