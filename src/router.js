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

function RouterApp() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Router>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/qrtest"><QRTest /></Route>
        <Route path="/qrview/:id">
          <QRView />
        </Route>
        {loggedIn === false && (
          <React.Fragment>
            <Route path="/register"><Register /></Route>
            <Route path="/login"><Login /></Route>
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
                <Route path="/admin-dashboard"> <Dashboard /></Route>
                <Route path="/customers"> <Customers /></Route>

                <Route exact path="/divisions" > <Division /></Route>
                <Route path="/divisions:id"> <DivisionEdit /></Route>
                <Route path="/division-add"> <DivisionAdd /> </Route>

                <Route exact path="/persons"> <Persons /></Route>
                <Route path="/persons/:id"> <PersonEdit /></Route>
                <Route path="/person-add"> <PersonAdd /></Route>

                <Route exact path="/users"> <Users /> </Route>
                <Route path="/users/:id"> <UserEdit /> </Route>
                <Route path="/user-add"> <UserAdd /> </Route>
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