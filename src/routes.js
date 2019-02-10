import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AppRoutes = () => (
  <Switch>
    {/* <Route exact path="/" component={Home} /> */}
    <Route render={() => '404'} />
  </Switch>
);

export default AppRoutes;
