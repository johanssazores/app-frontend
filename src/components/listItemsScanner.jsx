import React, {useState, useEffect} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import LogoutIcon from '@mui/icons-material/Logout';

import Divider from '@mui/material/Divider';
import { removeScannerSession } from '../utils/Common'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';


const SidebarScanner = () => {


  const [sessionUser, setSessionUser] = useState({});
  const sessionD = sessionStorage.getItem("scanner")


  useEffect(() => {
    if(sessionD) {
      setSessionUser(JSON.parse(sessionD))
    }
  }, [sessionD]);


  const handleLogout = () => {
    removeScannerSession();
    window.location.href='/scanner/login'
  }

  return (
    <>
      <div>
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
        <span className="sidebar-label-desc">{`${sessionUser && sessionUser.email}`}</span>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CorporateFareIcon />
        </ListItemIcon>
        <span className="sidebar-label-desc">{`${sessionUser && sessionUser.locationName}`}</span>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <span className="sidebar-label-desc">{`${sessionUser && sessionUser.branch}`}</span>
      </ListItem>

    </div>

    <Divider />

    <div>

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

export default SidebarScanner