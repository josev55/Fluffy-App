import React from 'react';
import { Link } from 'react-router';

const Landing = (props) => {
  return (
    <div>
      <ul className="main-nav">
        <li><img className="logo" src="http://static.tecnocino.it/tcwww/fotogallery/150X94/34479/facebook-pet-society-logo.jpg" /></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  );
}

export default Landing;
