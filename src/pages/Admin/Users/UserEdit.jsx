import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UserEdit = () => {

  let { id } = useParams();

  const [updateUser, setupdateUser] = useState({
    username: '',
    password: '',
    passwordVerify: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    division: ''
  })
  const [divisions, setDivisions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUserInfo() {
      const userGet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`);
      const getDivision = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/division`);
      setDivisions(getDivision.data);
      setupdateUser(userGet.data);
      setIsLoading(false)
    }
    getUserInfo();
  }, [id]);


  const SubmitEditUser = async e => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const updatedUser = await axios.request(
        `${process.env.REACT_APP_BACKEND_URL}/user/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            "username": updateUser.username,
            "password": updateUser.password,
            "passwordVerify": updateUser.passwordVerify,
            "firstName": updateUser.firstName,
            "lastName": updateUser.lastName,
            "email": updateUser.email,
            "role": updateUser.role,
            "division": updateUser.division
          })
        }
      )
      console.log(updatedUser.data)

      alert('User Edited')
      window.location.href="/admin/users"

    }
    catch(err) {
      console.error(err)
    }
    finally {
      setIsLoading(false)
    }
  }

  const onChangeUpdateUser = (e) => {  
    e.persist();  
    setupdateUser({...updateUser, [e.target.name]: e.target.value});  
  }  

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
        <Link to="/admin/users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={SubmitEditUser}>
            <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Username</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Username"  
                      name="username"
                      value={updateUser.username  || ""}
                      onChange={onChangeUpdateUser}
                      disabled
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
                      value={updateUser.password || "" }
                      onChange={onChangeUpdateUser}
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
                      value={updateUser.passwordVerify  || "" }
                      onChange={onChangeUpdateUser}
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
                      value={updateUser.firstName  || "" }
                      onChange={onChangeUpdateUser}
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
                      value={updateUser.lastName  || "" }
                      onChange={onChangeUpdateUser}
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
                      value={updateUser.email  || "" }
                      onChange={onChangeUpdateUser}
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
                      value={updateUser.role  || "" }
                      onChange={onChangeUpdateUser}
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
                      value={updateUser.division  || "" }
                      onChange={onChangeUpdateUser}
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

            <button type="submit" className="btn btn-primary">Edit User</button>
          </form>
        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default UserEdit