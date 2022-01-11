import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ScannerEdit = () => {

  let { id } = useParams();
  const [updateUser, setupdateUser] = useState({
    email: "",
    locationName: "",
    branch: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordVerify: ""
  })

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function getUserInfo() {
      const userGet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/scanner/${id}`);
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
        `${process.env.REACT_APP_BACKEND_URL}/scanner/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            "email": updateUser.email,
            "lastName": updateUser.lastName,
            "firstName": updateUser.firstName,
            "password": updateUser.password,
            "passwordVerify": updateUser.passwordVerify,
            "branch": updateUser.branch,
            "locationName": updateUser.locationName,
          })
        }
      )
      console.log(updatedUser.data)

      alert('Scanner Edited')
      window.location.href="/admin/scanners"

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
        <h1 className="h3 mb-0 text-gray-800">Edit Scanner</h1>
        <Link to="/admin/users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={SubmitEditUser}>
            <div className="row">
                <div className="col-md-4">

                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Username"  
                      name="username"
                      value={updateUser.email  || ""}
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
                    <label>Location Name</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Location Name"
                      name="locationName"
                      value={updateUser.locationName  || "" }
                      onChange={onChangeUpdateUser}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Branch</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Branch"
                      name="branch"
                      value={updateUser.branch  || "" }
                      onChange={onChangeUpdateUser}
                      required
                    />
                  </div>
                </div>

            </div>

            <button type="submit" className="btn btn-primary">Edit Scanner</button>
          </form>
        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default ScannerEdit