import React from 'react';
import { Link } from 'react-router';
import ReactDriveIn from 'react-drive-in';

const Landing = (props) => {
  return (
    <div className="landing-container">
        <div className="header">
          <ul className="main-nav">
            <li><img className="logo" height="94" width="250"  src="/imgs/Logo.png" /></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Pricing</Link></li>
          <li><Link to="/login">Log In</Link></li>
          </ul>
        </div>
        <div className="landing-body">
          <div className="landing-title">
            <span className="white-color font-landing">Because we care about them</span>
          </div>
          <div className="landing-subtitle">
            <span className="white-color font-landing">We care about you</span>
          </div>
        </div>
    </div>
  );
}

export default Landing;
