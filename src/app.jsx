import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { getToken, removeUserSession, setUserSession } from './utils/Common'
import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'
import axios from 'axios'

import Home from './pages/home'
import Login from './pages/user-login'
import Register from './pages/user-register'
import Register2 from './pages/user-register-2'

import Dashboard from './pages/user/dashboard'
import Settings from './pages/user/settings'

const App = () => {

  const [authLoading, setAuthLoading] = useState(true);
  const {REACT_APP_BACKEND_URL} = process.env;
  const appEnv = {backEndUrl: REACT_APP_BACKEND_URL};

  useEffect(() => {
    const token = getToken()
    if (!token) {
      return
    }
    axios.get(`${appEnv.backEndUrl}/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession()
      setAuthLoading(false)
    })
  }, [appEnv.backEndUrl])

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <PublicRoute path="/login" component={Login} />]
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/register-2" component={Register2} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  )
}

export default App