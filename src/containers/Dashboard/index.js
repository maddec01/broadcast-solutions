import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NavigationDashboard from '../../components/NavigationDashboard';

import AccountPage from './account';
import Overview from './overview';
import Rugby from '../../components/Rugby'

import * as ROUTES from '../../constants/routes';
import { withAuthorization } from '../../components/Session';

const Dashboard = () => (
  <BrowserRouter>
    <div className="content-with-side">
      <NavigationDashboard />
      <div className="content">
        <Switch>
          <Route exact path={ROUTES.DASHBOARD} component={Overview} />
          <Route path={ROUTES.RUGBY} component={Rugby} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Redirect from='/dashboard/*' to={ROUTES.DASHBOARD} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);