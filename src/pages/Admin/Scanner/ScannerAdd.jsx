import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ScannerAdd = () => {

  const [newScanner, setnewScanner] = useState({
    email: "",
    locationName: "",
    branch: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordVerify: ""
  })

  const [isLoading, setIsLoading] = useState(false);

  const SubmitAddUser = async e => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const saveUser = await axios.request(
        `${process.env.REACT_APP_BACKEND_URL}/scanner/create`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            "email": newScanner.email,
            "locationName": newScanner.locationName,
            "branch": newScanner.branch,
            "firstName": newScanner.firstName,
            "lastName": newScanner.lastName,
            "password": newScanner.password,
            "passwordVerify": newScanner.passwordVerify,
          })
        }
      )
      console.log(saveUser.data)
      alert('User Scanner Added')
      window.location.href="/admin/scanners"
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
        <h1 className="h3 mb-0 text-gray-800">Add QR Scanner User</h1>
        <Link to="/admin/scanners" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={SubmitAddUser}>
            <div className="row">

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={newScanner.email}
                      onChange={e => setnewScanner({...newScanner, email: e.target.value})}
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
                      value={newScanner.password}
                      onChange={e => setnewScanner({...newScanner, password: e.target.value})}
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
                      value={newScanner.passwordVerify}
                      onChange={e => setnewScanner({...newScanner, passwordVerify: e.target.value})}
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
                      value={newScanner.locationName}
                      onChange={e => setnewScanner({...newScanner, locationName: e.target.value})}
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
                      value={newScanner.branch}
                      onChange={e => setnewScanner({...newScanner, branch: e.target.value})}
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
                      value={newScanner.firstName}
                      onChange={e => setnewScanner({...newScanner, firstName: e.target.value})}
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
                      value={newScanner.lastName}
                      onChange={e => setnewScanner({...newScanner, lastName: e.target.value})}
                      required
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

export default ScannerAdd