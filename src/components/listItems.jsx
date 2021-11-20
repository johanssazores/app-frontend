import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { removeUserSession } from '../utils/Common'

export const mainListItems = (

  <div>
    <ListItem
    button
    key="Dashboard"
    component={NavLink} to="/admin-dashboard"
    >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem
    button
    key="Persons"
    component={NavLink} to="/persons"
    >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Persons" />
    </ListItem>


    <ListItem
    button
    key="Division"
    component={NavLink} to="/divisions"
    >
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Divisions" />
    </ListItem>
  </div>
);

const handleLogout = () => {
  removeUserSession();
  window.location.href='/admin-login'
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Admin</ListSubheader>

    <ListItem
    button
    key="Staffs"
    component={NavLink} to="/users"
    >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Staffs" />
    </ListItem>

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
);

