import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

const QRView = () => {
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
    <div className="container">
      <div className="row" style={{marginTop: "50px"}}> 
        <div className="col-md-12">
          <h2>Person Information</h2>
        </div>
        <div className="col-md-12">
          {user.email && (<p><strong>Email:</strong> {user.email}</p>)} 
          {user.firstName && (<p><strong>First Name:</strong> {user.firstName}</p>)} 
          {user.lastName && (<p><strong>Last Name:</strong> {user.lastName}</p>)} 
        </div>
      </div>
    </div>
  )
}

export default QRView