import React from 'react';
import { NavLink } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const NavigationDashboard = () => (
  <div className="nav-side">
    <ul>
      <div className="nav-side-group">
        <div className="nav-side-title">Dashboard</div>
        <li>
          <NavLink exact to={ROUTES.DASHBOARD}>Overview</NavLink>
        </li>
      </div>
      <div className="nav-side-group">
        <div className="nav-side-title">Games</div>
        <li>
          <NavLink to={ROUTES.RUGBY}>Rugby</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.TENNIS}>Tennis</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.FOOTBALL}>Football</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.TABLE_TENNIS}>Table Tennis</NavLink>
        </li>
      </div>
      <div className="nav-side-group">
        <div className="nav-side-title">Account</div>
        <li>
          <NavLink to={ROUTES.ACCOUNT}>Settings</NavLink>
        </li>
      </div>
    </ul>
  </div>
  
);

export default NavigationDashboard;