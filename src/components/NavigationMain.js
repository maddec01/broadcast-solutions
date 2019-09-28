import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../containers/SignOut';
import * as ROUTES from '../constants/routes';
import * as ROLES from '../constants/roles';
import { AuthUserContext } from './Session';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({authUser}) => (
  <nav role="navigation" className="nav-top">
    <div className="nav-top-left">
      <Link to={ROUTES.DASHBOARD}><span>STREAM</span><span>STUDIO</span></Link>
    </div>
    <div className="nav-top-right">
      {authUser.roles.includes(ROLES.ADMIN) && (
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      )}
      <li>
        <SignOutButton />
      </li>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav role="navigation" className="nav-top">
    <div className="nav-top-left">
      <Link to={ROUTES.DASHBOARD}><span>STREAM</span><span>STUDIO</span></Link>
    </div>
    <div className="nav-top-right">
      <li>
        <Link to={ROUTES.SIGN_IN}>Login</Link>
      </li>
    </div>
  </nav>
);

export default Navigation;