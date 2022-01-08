import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import BarChartIcon from '@mui/icons-material/BarChart';
import Divider from '@mui/material/Divider';
import { removeUserSession, getUser } from '../utils/Common'
import Logo from '../assets/images/logo.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

const Sidebar = () => {

  const [sessionUser, setSessionUser] = useState({});
  const [view, setView] = useState(false)
  const sessionD = sessionStorage.getItem("user")

  const userDetail = getUser();
  const userRole = (userDetail.role || '') ;

  useEffect(() => {
    if(sessionD) {
      setSessionUser(JSON.parse(sessionD))
    }
  }, [sessionD]);

  console.log(sessionUser)

  useEffect(() => {
    if(userRole === 'ADMINISTRATOR'){
      setView(true)
    }
    if(userRole === 'QC-LGU-DPO'){
      setView(true)
    }
  }, [userRole]);

  const handleLogout = () => {
    removeUserSession();
    window.location.href='/admin/login'
  }

  return (
    <>
      <div>
      
      <div className="sidebar-image">
        <img width="50%"src={Logo} alt="1Kyusi"/>
      </div>
  
      <ListSubheader inset>
        User Information
      </ListSubheader>

      <ListItem>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <span className="sidebar-label-desc">{`${sessionUser && sessionUser.firstName} ${sessionUser && sessionUser.lastName}`}</span>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <span className="sidebar-label-desc">{`${sessionUser && sessionUser.role}`}</span>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CorporateFareIcon />
        </ListItemIcon>
        <span className="sidebar-label-desc">{`${sessionUser && sessionUser.barangay}`}</span>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <span className="sidebar-label-desc">{`${sessionUser && sessionUser.address}`}</span>
      </ListItem>

      <Divider />
      <ListSubheader inset>
        Menu
      </ListSubheader>
      <ListItem
      button
      key="Dashboard"
      component={NavLink} to="/admin/dashboard"
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem
      button
      key="Constituents"
      component={NavLink} to="/admin/persons"
      >
        <ListItemIcon>
          <PeopleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Constituents" />
      </ListItem>

      <ListItem
      button
      key="Movements"
      component={NavLink} to="/admin/movements"
      >
        <ListItemIcon>
          <LocationSearchingIcon />
        </ListItemIcon>
        <ListItemText primary="Movements Tracker" />
      </ListItem>


    </div>
    <Divider />
    <div>
    {view === true
      ?
      (
        <>
        <ListSubheader inset>Admin Panel</ListSubheader>

        <ListItem
        button
        key="Staffs"
        component={NavLink} to="/admin/users"
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        </>
      )
      : ""
    }


    <ListSubheader inset></ListSubheader>
    <ListItem
    button
    onClick={handleLogout}
    >
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
    </div>

    </>
  )
}

export default Sidebar