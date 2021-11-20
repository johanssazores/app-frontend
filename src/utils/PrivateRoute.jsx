import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import Dashboard from '../components/Dashboard'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Dashboard>
      <Route
        {...rest}
        render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/admin-login', state: { from: props.location } }} />}
      />
    </Dashboard>
  )
}

export default PrivateRoute