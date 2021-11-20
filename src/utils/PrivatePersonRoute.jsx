import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getPersonToken } from './Common';

function PrivatePersonRoute({ component: Component, ...rest }) {
  return (
      <Route
        {...rest}
        render={(props) => getPersonToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/admin-login', state: { from: props.location } }} />}
      />
  )
}

export default PrivatePersonRoute