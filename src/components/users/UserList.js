import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';

const UserList = ({users}) => {
  let { url } = useRouteMatch();

  function renderUsers() {
    return users.map((user, i) => {
      return ( 
        <tr key={i}>
          <td>{user._id}</td>
          <td>{user.email}</td>
          <td><Link to={`${url}/${user._id}`} >Edit User</Link> || Delete</td>
        </tr>
      );
    });
  }
  
  return (
    <React.Fragment>{renderUsers()}</React.Fragment>
  )
}

export default UserList