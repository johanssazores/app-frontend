import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getScannerToken } from './Common';

function PublicScannerRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !getScannerToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/scanner/dashboard' }} />}
    />
  )
}

export default PublicScannerRoute;