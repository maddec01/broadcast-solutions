import React from 'react';

import { withFirebase } from '../components/Firebase';

const SignOutButton = ({ firebase }) => (
  <a href="/" onClick={firebase.doSignOut}>
    Logout
  </a>
);

export default withFirebase(SignOutButton);