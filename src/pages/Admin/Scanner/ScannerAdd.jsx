import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import validator from 'validator'
import District from '../../../data/District.json'
import Select from 'react-select';

const ScannerAdd = () => {

  const [newScanner, setnewScanner] = useState({
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

  const [barangay, setBarangay] = useState({
    value: "",
    label: ""
  })
  const [street, setStreet] = useState({
    value: "",
    label: ""
  })

  const [showBarangay, setShowBarangay] = useState(true)
  const [showAddress, setshowAddress] = useState(true)

  const SubmitAddUser = async e => {
    e.preventDefault();
    console.log(newScanner)
    try {
      setIsLoading(true)
      if (
        validator.isEmpty(newScanner.barangay) || validator.isEmpty(newScanner.address)
      ) {
        alert('Please enter all fields');
      } else {
          const saveUser = await axios.request(
            `${process.env.REACT_APP_BACKEND_URL}/user/create`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              data: JSON.stringify({
                "username": newScanner.username,
                "password": newScanner.password,
                "passwordVerify": newScanner.passwordVerify,
                "firstName": newScanner.firstName,
                "lastName": newScanner.lastName,
                "email": newScanner.email,
                "role": newScanner.role,
                "district": newScanner.district,
                "barangay": newScanner.barangay,
                "address": newScanner.address
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

  const selectDistrict = (e, value) => {
    setnewScanner({...newScanner, district: value})
    let districtF = District.filter(d => d.District === value);
    function uniqurArray(array){
      var a = array.concat();
      for(var i=0; i<a.length; i++) {
        for(var j=i+1; j<a.length; j++) {
          if(a[i].Barangay === a[j].Barangay){
              a.splice(j--, 1);
          }
        }
      }
      return a;
    }
    const barangayD = uniqurArray(districtF);
    const mapB = barangayD.map(b => ({
      value: b.Barangay,
      label: b.Barangay,
    }));
    setBarangay(mapB)
    setShowBarangay(false)
  }

  const handleChangeBarangay = (e) => {
    setnewScanner({...newScanner, barangay: e.value})
    let barangayF = District.filter(d => d.Barangay === e.value);
    const mapS = barangayF.map(s => ({
      value: s.Address,
      label: s.Address,
    }));
    setStreet(mapS)
    setshowAddress(false)
  };

  const handleChangeAddress = (e) => {
    setnewScanner({...newScanner, address: e.value})
  };


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
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={newScanner.username}
                      onChange={e => setnewScanner({...newScanner, username: e.target.value})}
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
                    <label>Role</label>
                    <select
                      type="text"
                      className="form-control"
                      placeholder="Role"
                      name="role"
                      value={newScanner.role}
                      onChange={e => setnewScanner({...newScanner, role: e.target.value})}
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
                    <label>District</label>
                    <select
                      type="text"
                      className="form-control"
                      placeholder="District"
                      value={newScanner.district}
                      onChange={e => {
                        setnewScanner({...newScanner, division: e.target.value});
                        selectDistrict(e, e.target.value);
                      }}
                      required
                    >
                      <option value="" disabled>-SELECT DISTRICT-</option>
                      <option value="1st District">1st District</option>
                      <option value="2nd District">2nd District</option>
                      <option value="3rd District">3rd District</option>
                      <option value="4th District">4th District</option>
                      <option value="5th District">5th District</option>
                      <option value="6th District">6th District</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Barangay</label>
                    <Select
                      onChange={handleChangeBarangay}
                      options={barangay}
                      isSearchable="true"
                      required
                      isDisabled={showBarangay}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Street Address</label>
                    <Select
                      onChange={handleChangeAddress}
                      options={street}
                      isSearchable="true"
                      required
                      isDisabled={showAddress}
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