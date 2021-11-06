import React, { useEffect, useState } from "react";
import axios from "axios";

import UserList from '../../../components/users/UserList'

const Users = () => {
  
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const usersRes = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/users/`);
    setUsers(usersRes.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
        <a href="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Add User</a>
      </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Persons</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">

            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <UserList users={users}/>
              </tbody>
            </table>

            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Users