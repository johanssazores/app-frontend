import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AuthContext from "./context/AuthContext";

import Home from './pages/Home'
import QRView from "./pages/QRView";
import QRTest from "./pages/QRTest";

import Dashboard from "./pages/AdminDashboard/Dashboard";

import Division from "./pages/AdminDashboard/Divisions/Divisions";
import DivisionAdd from "./pages/AdminDashboard/Divisions/DivisionAdd";
import DivisionEdit from "./pages/AdminDashboard/Divisions/DivisionEdit";

import Persons from "./pages/AdminDashboard/Persons/Persons";
import PersonAdd from "./pages/AdminDashboard/Persons/PersonAdd";
import PersonEdit from "./pages/AdminDashboard/Persons/PersonEdit";

import Users from "./pages/AdminDashboard/Users/Users"
import UserAdd from "./pages/AdminDashboard/Users/UserAdd"
import UserEdit from "./pages/AdminDashboard/Users/UserEdit"

import Test from './pages/Test'

function RouterApp() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route component={Home}  path="/" exact/>
        <Route component={Test} path="/test" />
        <Route path="/qrtest"><QRTest /></Route>
        <Route path="/qrview/:id">
          <QRView />
        </Route>
        {loggedIn === false && (
          <React.Fragment>
            <Route component={Register}path="/register" exact />
            <Route component={Login} path="/login" exact />
          </React.Fragment>
        )}

        {loggedIn === true && (
          <React.Fragment>      
            <div id="wrapper">
              <Navbar />
              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 big">A Test</span>
                    </li>
                  </ul>
                </nav>
                <Route component={Dashboard} path="/admin-dashboard" exact/> 
                <Route component={Customers} path="/customers" exact /> 

                <Route component={Division} path="/divisions" exact />
                <Route component={DivisionEdit} path="/divisions:id"/> 
                <Route component={DivisionAdd} path="/division-add" />  

                <Route component={Persons} path="/persons" /> 
                <Route component={PersonEdit}path="/persons/:id" exact/> 
                <Route component={PersonAdd}path="/person-add" exact/> 

                <Route component={Users} path="/users" exact/> 
                <Route component={UserEdit}path="/users/:id" exact/> 
                <Route component={UserAdd}path="/user-add" exact/> 
                </div>
                <Footer />
              </div>
            </div>
          </React.Fragment>
        )}
      </Switch>
     
    </Router>
  );
}

export default RouterApp