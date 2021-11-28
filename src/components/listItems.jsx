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
import LayersIcon from '@mui/icons-material/Layers';
import Divider from '@mui/material/Divider';
import { removeUserSession, getUser } from '../utils/Common'


const Sidebar = () => {

  const userDetail = getUser(); 
  const userRole = userDetail.role;

  const [view, setView] = useState(false)


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
      key="Persons"
      component={NavLink} to="/admin/persons"
      >
        <ListItemIcon>
          <PeopleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Persons" />
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

      {view === true
        ? 
        (
          <>
        <ListItem
        button
        key="Division"
        component={NavLink} to="/admin/divisions"
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Divisions" />
        </ListItem>
          </>
        )
        : ""
      }

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



// export const mainListItems  =  (

//   <div>
//     <ListItem
//     button
//     key="Dashboard"
//     component={NavLink} to="/admin/dashboard"
//     >
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItem>

//     <ListItem
//     button
//     key="Persons"
//     component={NavLink} to="/admin/persons"
//     >
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Persons" />
//     </ListItem>

//     {userDetail && (userDetail.role === "Admin") 
//       ? 
//       (
//         <>
//       <ListItem
//       button
//       key="Division"
//       component={NavLink} to="/admin/divisions"
//       >
//         <ListItemIcon>
//           <LayersIcon />
//         </ListItemIcon>
//         <ListItemText primary="Divisions" />
//       </ListItem>
//         </>
//       )
//       : ""
//     }



//   </div>
// );


// export const secondaryListItems = (
//   <div>

//     {userDetail && (userDetail.role === "Admin") 
//       ? 
//       (
//         <>
//         <ListSubheader inset>Admin</ListSubheader>

//         <ListItem
//         button
//         key="Staffs"
//         component={NavLink} to="/admin/users"
//         >
//           <ListItemIcon>
//             <PeopleIcon />
//           </ListItemIcon>
//           <ListItemText primary="Staffs" />
//         </ListItem>
//         </>
//       )
//       : ""
//     }


//     <ListSubheader inset></ListSubheader>
//     <ListItem
//     button
//     onClick={handleLogout}
//     >
//       <ListItemIcon>
//         <LogoutIcon />
//       </ListItemIcon>
//       <ListItemText primary="Logout" />
//     </ListItem>
//   </div>
// );