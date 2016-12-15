import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Landing from './components/landing';
import LogIn from './components/log_in';
import Home from './components/component_home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/login" component={LogIn} />
    <Route path="/home" component={Home} />
  </Route>
);
