import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { getToken, removeUserSession, setUserSession, getScannerToken, removeScannerSession, setScannerSession } from './utils/Common';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

import PublicScannerRoute from './utils/PublicScannerRoute'
import PrivateScannerRoute from './utils/PrivateScannerRoute'


import axios from 'axios';

import UserLogin from './pages/UserLogin';
import Dashboard from './pages/User/Dashboard';
// import Settings from './pages/user/settings';

import QRView from './pages/QRView';

import AdminLogin from './pages/AdminLogin';

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminSettings from './pages/Admin/AdminSettings';

import Users from './pages/Admin/Users/Users'
import UserAdd from './pages/Admin/Users/UserAdd'
import UserEdit from './pages/Admin/Users/UserEdit'

import Scanner from './pages/Admin/Scanner/Scanner'
import ScannerAdd from './pages/Admin/Scanner/ScannerAdd'
import ScannerEdit from './pages/Admin/Scanner/ScannerEdit'

import Persons from './pages/Admin/Persons/Persons'
import PersonAdd from './pages/Admin/Persons/PersonAdd'
import PersonEdit from './pages/Admin/Persons/PersonEdit'

import Movements from './pages/Admin/Movements/Movements';
import ScannerQR from './pages/ScannerQR';

import NotFound from './pages/NotFound';

const App = () => {

  const [authLoading, setAuthLoading] = useState(true);

  const hasScannerToken = sessionStorage.getItem("scanner")
  const hasUserToken = sessionStorage.getItem("user")

  useEffect(() => {

    if(hasUserToken) {
        const token = getToken();
        if (!token) {
          return;
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/verifyToken/admin`, { token: token } ).then(response => {
          setUserSession(response.data.token, response.data.user);
          setAuthLoading(false);
        }).catch(error => {
          removeUserSession();
          setAuthLoading(false);
        });
    }

  }, [hasUserToken]);


  useEffect(() => {
    if(hasScannerToken){
      const tokenScanner = getScannerToken();
      if (!tokenScanner) {
        return;
      }
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/scanner/verifyToken/admin`, { tokenScanner: tokenScanner } ).then(response => {
        setScannerSession(response.data.tokenScanner, response.data.scanner);
        setAuthLoading(false);
      }).catch(error => {
        removeScannerSession();
        setAuthLoading(false);
      });
    }
  }, [hasScannerToken]);


  if (authLoading && getToken()) {
    return <div className="exid-spinner" style={{ fontSize: "10em" }}></div>
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserLogin} />

        <Route exact path="/qr/:id" component={QRView} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/scanner" component={ScannerQR} />

        <PublicRoute exact path="/admin/login" component={AdminLogin} />

        <PublicScannerRoute exact path="/scanner/login" component={UserLogin} />
        <PrivateScannerRoute exact path="/scanner/dashboard" component={ScannerQR}/>

        <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <PrivateRoute exact path="/admin//settings" component={AdminSettings} />

        <PrivateRoute exact path="/admin/users" component={Users} />
        <PrivateRoute exact path="/admin/user-add" component={UserAdd} />
        <PrivateRoute exact path="/admin/user/:id" component={UserEdit} />

        <PrivateRoute exact path="/admin/scanners" component={Scanner} />
        <PrivateRoute exact path="/admin/scanner-add" component={ScannerAdd} />
        <PrivateRoute exact path="/admin/scanner/:id" component={ScannerEdit} />

        <PrivateRoute exact path="/admin/persons" component={Persons} />
        <PrivateRoute exact path="/admin/person-add" component={PersonAdd} />
        <PrivateRoute exact path="/admin/person/:id" component={PersonEdit} />

        <PrivateRoute exact path="/admin/movements" component={Movements} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App