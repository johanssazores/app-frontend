import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UserEdit = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const userGet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`);
      setUser(userGet.data);
    }
    getUser();
  },[id]);

  return (
    <div>
      {user.username}
    </div>
  )
}

export default UserEdit