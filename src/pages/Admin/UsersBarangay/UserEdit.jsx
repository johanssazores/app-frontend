import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import validator from 'validator'
import District from '../../../data/District.json'
import Select from 'react-select';

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
    district: '',
    barangay: '',
    address: ''
  })

  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    async function getUserInfo() {
      const userGet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`);
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
            "district": updateUser.district,
            "barangay" : updateUser.barangay,
            "address" : updateUser.address
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

  const selectDistrict = (e, value) => {
    setupdateUser({...updateUser, district: value})
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
    setupdateUser({...updateUser, barangay: e.value})
    let barangayF = District.filter(d => d.Barangay === e.value);
    const mapS = barangayF.map(s => ({
      value: s.Address,
      label: s.Address,
    }));
    setStreet(mapS)
    setshowAddress(false)
  };

  const handleChangeAddress = (e) => {
    setupdateUser({...updateUser, address: e.value})
  };


  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
        <Link to="/admin/users-barangay" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
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
                    <label>District</label>
                    <select 
                      type="text"
                      className="form-control"
                      placeholder="District"
                      value={updateUser.district}
                      onChange={e => {
                        setupdateUser({...updateUser, division: e.target.value});
                        selectDistrict(e, e.target.value);
                      }}
                      disabled={true}
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
                      // value={updateUser.barangay}
                      value={{value: updateUser.barangay, label: updateUser.barangay}}
                      isSearchable="true"
                      defaultValue={{ 
                        label: updateUser.barangay , 
                        value: updateUser.barangay 
                      }}
                      isDisabled={showBarangay}
                      required
                    />
                  </div>
                </div>
        
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Street Address</label>
                    <Select
                      onChange={handleChangeAddress}
                      options={street}
                      // value={updateUser.address}
                      value={{value: updateUser.address, label: updateUser.address}}
                      isSearchable="true"
                      defaultValue={{ 
                        label: updateUser.address, 
                        value: updateUser.address 
                      }}
                      isDisabled={showAddress}
                      required
                    />
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