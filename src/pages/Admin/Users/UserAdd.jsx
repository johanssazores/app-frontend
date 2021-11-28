import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserAdd = () => {

const [newUser, setNewUser] = useState({
  username: "",
  password: "",
  passwordVerify: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  division: ""
})
const [divisions, setDivisions] = useState([]);
const [isLoading, setIsLoading] = useState(false);

async function getDivision() {
  const getDivision = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/division`);
  setDivisions(getDivision.data);
  setIsLoading(false)
}

useEffect(() => {
  getDivision();
}, []);

  const SubmitAddUser = async e => {
    e.preventDefault();
    console.log(newUser)
    try {
      setIsLoading(true)
      const saveUser = await axios.request(
        `${process.env.REACT_APP_BACKEND_URL}/user/create`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            "username": newUser.username,
            "password": newUser.password,
            "passwordVerify": newUser.passwordVerify,
            "firstName": newUser.firstName,
            "lastName": newUser.lastName,
            "email": newUser.email,
            "role": newUser.role,
            "division": newUser.division
          })
        }
      )
      console.log(saveUser.data)
      alert('User Added')
      window.location.href="/admin/users"
    }
    catch(err) {
      console.error(err)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add User</h1>
        <Link to="/admin/users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={SubmitAddUser}>
            <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Username</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={newUser.username}
                      onChange={e => setNewUser({...newUser, username: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Password</label>
                    <input 
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={newUser.password}
                      onChange={e => setNewUser({...newUser, password: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Repeat Password</label>
                    <input 
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="passwordVerify"
                      value={newUser.passwordVerify}
                      onChange={e => setNewUser({...newUser, passwordVerify: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={newUser.firstName}
                      onChange={e => setNewUser({...newUser, firstName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={newUser.lastName}
                      onChange={e => setNewUser({...newUser, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={newUser.email}
                      onChange={e => setNewUser({...newUser, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Role</label>
                    <select 
                      type="text"
                      className="form-control"
                      placeholder="Role"
                      name="role"
                      value={newUser.role}
                      onChange={e => setNewUser({...newUser, role: e.target.value})}
                      required
                    >
                
                      <option value="" disabled>-SELECT ROLE-</option>
                      <option value="ADMINISTRATOR">ADMINISTRATOR</option>
                      <option value="QC-LGU-DPO">QC LGU DPO</option>
                      <option value="QC-BARANGAY-DPO">QC BARANGAY DPO</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Division</label>
                    <select 
                      type="text"
                      className="form-control"
                      placeholder="Division"
                      value={newUser.division}
                      onChange={e => setNewUser({...newUser, division: e.target.value})}
                      required
                    > 
                       <option value="" disabled>-SELECT DIVISION-</option>
                      {divisions && divisions.map((division) => {
                          return (
                            <option value={division.division} key={division._id}>{division.division}</option>
                          )
                      })
                      }
                    </select>
                  </div>
                </div>

            </div>

            <button type="submit" className="btn btn-primary">Add User</button>
          </form>
        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default UserAdd