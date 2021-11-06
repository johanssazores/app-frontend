import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutButton";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      {loggedIn === false && (
        <>
          <NavLink to="/login">Log in</NavLink>
        </>
      )}
   
    {loggedIn === true && (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-text mx-3">Thesis Project</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <NavLink activeClassName='active' className="nav-item" to="/admin-dashboard">
          <p className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </p>
        </NavLink>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
          Interface
        </div>

        <NavLink activeClassName='active' className="nav-item" to="/persons">
          <p className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Persons</span>
          </p>
        </NavLink>

        <NavLink activeClassName='active' className="nav-item" to="/divisions">
          <p className="nav-link">
            <i className="fas fa-fw fa-folder"></i>
            <span>Divisions</span>
          </p>
        </NavLink>

        <NavLink activeClassName='active' className="nav-item" to="/users">
          <p className="nav-link">
            <i className="fas fa-user fa-sm fa-fw mr-2"></i>
            <span>Users</span>
          </p>
        </NavLink>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link" href="/login">
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i>
            <LogOutBtn />
          </a>
        </li>
      </ul>
      )}
    </div>
  );
}

export default Navbar;