import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { getToken, removeUserSession, setUserSession } from './utils/Common';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import axios from 'axios';

import UserLogin from './pages/UserLogin';
import Dashboard from './pages/User/Dashboard';
// import Settings from './pages/user/settings';

import Registration from './pages/SignUp'
import QRView from './pages/QRView';

import AdminLogin from './pages/AdminLogin';

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminSettings from './pages/Admin/AdminSettings';

import Divisions from './pages/Admin/Divisions/Divisions';
import DivisionAdd from './pages/Admin/Divisions/DivisionAdd';
import DivisionEdit from './pages/Admin/Divisions/DivisionEdit';

import Users from './pages/Admin/Users/Users'
import UserAdd from './pages/Admin/Users/UserAdd'
import UserEdit from './pages/Admin/Users/UserEdit'

import Persons from './pages/Admin/Persons/Persons'
import PersonAdd from './pages/Admin/Persons/PersonAdd'
import PersonEdit from './pages/Admin/Persons/PersonEdit'

import Movements from './pages/Admin/Movements/Movements';
import ScannerQR from './pages/ScannerQR';

import NotFound from './pages/NotFound';

const App = () => {

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
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

  }, []);

  if (authLoading && getToken()) {
    return <div className="exid-spinner" style={{ fontSize: "10em" }}></div>
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserLogin} />

        <Route exact path="/registration" component={Registration} />
        
        <Route exact path="/qr/:id" component={QRView} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/scanner" component={ScannerQR} />

        <PublicRoute exact path="/admin/login" component={AdminLogin} />
      
        <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <PrivateRoute exact path="/admin//settings" component={AdminSettings} />

        <PrivateRoute exact path="/admin/divisions" component={Divisions} />
        <PrivateRoute exact path="/admin/division-add" component={DivisionAdd} />
        <PrivateRoute exact path="/admin/division/:id" component={DivisionEdit} />

        <PrivateRoute exact path="/admin/users" component={Users} />
        <PrivateRoute exact path="/admin/user-add" component={UserAdd} />
        <PrivateRoute exact path="/admin/user/:id" component={UserEdit} />

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