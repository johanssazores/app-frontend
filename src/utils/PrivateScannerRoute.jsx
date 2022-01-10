import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getScannerToken } from './Common';
import DashboardScanner from '../components/DashboardScanner'

function PrivateScannerRoute({ component: Component, ...rest }) {
  return (
    <DashboardScanner>
      <Route
        {...rest}
        render={(props) => getScannerToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/scanner/login', state: { from: props.location } }} />}
      />
    </DashboardScanner>
  )
}

export default PrivateScannerRoute