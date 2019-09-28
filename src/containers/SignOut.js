import React from 'react';

import { withFirebase } from '../components/Firebase';

const SignOutButton = ({ firebase }) => (
  <a href="/" onClick={firebase.doSignOut}>
    Sign Out
  </a>
);

export default withFirebase(SignOutButton);