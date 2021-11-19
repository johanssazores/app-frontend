import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";

import AuthContext from "./context/AuthContext";

import Home from './pages/Home'
import QRView from "./pages/QRView";
import QRTest from "./pages/QRTest";

import DashboardLayout from "./components/Dashboard";
import Dashboard from "./pages/AdminDashboard/Dashboard"

import Division from "./pages/AdminDashboard/Divisions/Divisions";
import DivisionAdd from "./pages/AdminDashboard/Divisions/DivisionAdd";
import DivisionEdit from "./pages/AdminDashboard/Divisions/DivisionEdit";

import Persons from "./pages/AdminDashboard/Persons/Persons";
import PersonAdd from "./pages/AdminDashboard/Persons/PersonAdd";
import PersonEdit from "./pages/AdminDashboard/Persons/PersonEdit";

import Users from "./pages/AdminDashboard/Users/Users"
import UserAdd from "./pages/AdminDashboard/Users/UserAdd"
import UserEdit from "./pages/AdminDashboard/Users/UserEdit"

import NotFound from './pages/NotFound'

function RouterApp() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route component={Home}  path="/" exact/>

        <Route path="/qrtest"><QRTest /></Route>
        <Route path="/qrview/:id"><QRView /></Route>

        {loggedIn === false && (
          <React.Fragment>
            <Route component={Register}path="/register" exact />
            <Route component={Login} path="/login" exact />
          </React.Fragment>
        )}

        {loggedIn === true && (
          <DashboardLayout>
            <Route component={Dashboard} path="/admin-dashboard" exact/>
            <Route component={Customers} path="/customers" exact />

            <Route component={Division} path="/divisions" exact />
            <Route component={DivisionEdit} path="/divisions/:id"/>
            <Route component={DivisionAdd} path="/division-add" />

            <Route component={Persons} path="/persons" />
            <Route component={PersonEdit}path="/persons/:id" exact/>
            <Route component={PersonAdd}path="/person-add" exact/>

            <Route component={Users} path="/users" exact/>
            <Route component={UserEdit}path="/users/:id" exact/>
            <Route component={UserAdd}path="/user-add" exact/>
          </DashboardLayout>
        )}

        <Route component={NotFound} />
      </Switch>

    </Router>
  );
}

export default RouterApp