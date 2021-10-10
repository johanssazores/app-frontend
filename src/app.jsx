import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { getToken, removeUserSession, setUserSession } from './utils/Common';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import axios from 'axios';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

import Dashboard from './pages/user/dashboard';
import Settings from './pages/user/settings';

const App = () => {

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        
        <PublicRoute path="/login" component={Login} />]
        <PublicRoute path="/register" component={Register} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  )
}

export default App