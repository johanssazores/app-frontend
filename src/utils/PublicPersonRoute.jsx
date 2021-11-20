import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getPersonToken } from './Common';

function PublicPersonRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !getPersonToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
    />
  )
}

export default PublicPersonRoute;