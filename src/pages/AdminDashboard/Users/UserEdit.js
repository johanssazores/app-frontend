import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

const UserEdit = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const usersRes = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/users/${id}`);
      setUser(usersRes.data);
    }
    getUser();
  },[id]);

  return (
    <div className="row">
      {user.email}
      {user._id}
    </div>
  )
}

export default UserEdit