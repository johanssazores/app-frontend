import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import validator from 'validator'

const UserAdd = () => {

  const [sessionUser, setSessionUser] = useState({});
  const sessionD = sessionStorage.getItem("user")

  useEffect(() => {
    if(sessionD) {
      setSessionUser(JSON.parse(sessionD))
    }
  }, [sessionD]);

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    passwordVerify: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    district: "",
    barangay: "",
    address: ""
  })

  const [isLoading, setIsLoading] = useState(false);


  const SubmitAddUser = async e => {
    e.preventDefault();
    console.log(newUser)
    try {
      setIsLoading(true)
      if (
        validator.isEmpty(newUser.barangay) || validator.isEmpty(newUser.address)
      ) {
        alert('Please enter all fields');
      } else {
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
                "role": sessionUser.role,
                "district": sessionUser.district,
                "barangay": sessionUser.barangay,
                "address": sessionUser.address
              })
            }
          )
          console.log(saveUser.data)
          alert('User Added')
          window.location.href="/admin/users"
      }

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
        <Link to="/admin/users-barangay" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
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
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Role"
                      name="role"
                      value={sessionUser.role}
                      onChange={e => setNewUser({...newUser, role: e.target.value})}
                      required
                      disabled={true}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>District</label>
                    <input 
                      type="district"
                      className="form-control"
                      placeholder="District"
                      name="district"
                      value={sessionUser.district}
                      onChange={e => setNewUser({...newUser, district: e.target.value})}
                      required
                      disabled={true}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Barangay</label>
                      <input 
                        type="text"
                        className="form-control"
                        placeholder="Barangay"
                        name="barangay"
                        value={sessionUser.barangay}
                        onChange={e => setNewUser({...newUser, barangay: e.target.value})}
                        required
                        disabled={true}
                      />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Street Address</label>
                      <input 
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        value={sessionUser.address}
                        onChange={e => setNewUser({...newUser, address: e.target.value})}
                        required
                        disabled={true}
                      />
                  </div>
                </div>
      
            </div>

            <button type="submit" className="btn btn-primary">Save User</button>
          </form>
        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default UserAdd