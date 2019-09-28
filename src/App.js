import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Navigation from './components/NavigationMain';
import LandingPage from './containers/Landing';
import SignUpPage from './containers/SignUp';
import SignInPage from './containers/SignIn';
import PasswordForgetPage from './containers/PasswordForget';
import Dashboard from './containers/Dashboard';
import AdminPage from './containers/Admin';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

const App = () => (
  <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Redirect from='*' to={ROUTES.LANDING} />
      </Switch>
  </BrowserRouter>
);

export default withAuthentication(App);