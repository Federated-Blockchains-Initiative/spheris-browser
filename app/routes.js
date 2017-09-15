import React from 'react';
import { Switch, Route } from 'react-router';

import MainPage from './pages/MainPage';

export default (
  <Switch>
    <Route exact path="/" component={MainPage} />
  </Switch>
);
