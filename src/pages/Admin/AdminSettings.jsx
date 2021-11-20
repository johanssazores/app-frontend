import React from 'react'
import { getUser, removeUserSession } from '../../utils/Common'

const AdminSettings = (props) => {

  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      Settings {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  )
}

export default AdminSettings