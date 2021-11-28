import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const PersonAdd = () => {

const [newPerson, setNewPerson] = useState({
  division : "",
  firstName : "",
  lastName : "",
  sex : "",
  birthDay : "",
  birthMonth : "",
  birthYear : "",
  address : "",
  maritalStatus : "",
  numberOfChildren : "",
  citizenship : "",
  religion : "",
  phoneNumber : "", 
  email : "",
  highestAttainedEducation : "",
  statusEducation : "", 
  schoolEducation : "", 
  courseEducation : "", 
  pregnantMedical : "", 
  pregnantMonthsMedical : "", 
  bloodTypeMedical : "", 
  withMaintenanceMedical : "", 
  onGoingMedicationMedical : "", 
  nameOfMedicineMedical : "", 
  lastHospitalMedical : "",
  password : "",
  passwordVerify : ""
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

  const SubmitAddPerson = async e => {
    e.preventDefault();
    console.log(newPerson)
    try {
      setIsLoading(true)
      if(newPerson.password === newPerson.passwordVerify){
        const savePerson = await axios.request(
          `${process.env.REACT_APP_BACKEND_URL}/person/create`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({
              "division" : newPerson.division,
              "firstName" : newPerson.firstName,
              "lastName" : newPerson.lastName,
              "sex" : newPerson.sex,
              "dateOfBirth" : `${newPerson.birthDay}-${newPerson.birthMonth}-${newPerson.birthYear}`,
              "address" : newPerson.address,
              "maritalStatus" : newPerson.maritalStatus,
              "numberOfChildren" : newPerson.numberOfChildren,
              "citizenship" : newPerson.citizenship,
              "religion" : newPerson.religion,
              "phoneNumber" : newPerson.phoneNumber, 
              "email" : newPerson.email,
              "highestAttainedEducation" : newPerson.highestAttainedEducation,
              "statusEducation" : newPerson.statusEducation, 
              "schoolEducation" : newPerson.schoolEducation, 
              "courseEducation" : newPerson.courseEducation, 
              "pregnantMedical" : newPerson.pregnantMedical, 
              "pregnantMonthsMedical" : newPerson.pregnantMonthsMedical, 
              "bloodTypeMedical" : newPerson.bloodTypeMedical, 
              "withMaintenanceMedical" : newPerson.withMaintenanceMedical, 
              "onGoingMedicationMedical" : newPerson.onGoingMedicationMedical, 
              "nameOfMedicineMedical" : newPerson.nameOfMedicineMedical, 
              "lastHospitalMedical" : newPerson.lastHospitalMedical,
              "password" : newPerson.password,
              "passwordVerify" : newPerson.passwordVerify
            })
          }
        )
        console.log(savePerson.data)
        alert('Person Added')
        window.location.href="/admin/persons"
      } else {
        alert('Password Do not match')
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
        <h1 className="h3 mb-0 text-gray-800">Add Person</h1>
        <Link to="/admin/persons" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
        <hr/>
          <form onSubmit={SubmitAddPerson}>
      
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h2 className="h5 mb-0 text-gray-800">Personal Details</h2>
            </div>
        
            <div className="row">

                <div className="col-md-4">
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={newPerson.firstName}
                      onChange={e => setNewPerson({...newPerson, firstName: e.target.value})}
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
                      value={newPerson.lastName}
                      onChange={e => setNewPerson({...newPerson, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Division</label>
                    <select 
                      type="text"
                      className="form-control"
                      placeholder="Division"
                      value={newPerson.division}
                      onChange={e => setNewPerson({...newPerson, division: e.target.value})}
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

                <div className="col-md-3">
                  <div className="form-group">
                    <label>Sex Assigned at Birth</label>
                    <select 
                      type="text"
                      className="form-control"
                      placeholder="Sex Assigned at Birth"
                      value={newPerson.sex}
                      onChange={e => setNewPerson({...newPerson, sex: e.target.value})}
                      required
                    > 
                       <option value="" disabled>-SELECT SEX-</option>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label>Birth Day</label>
                    <select 
                      type="text"
                      className="form-control"
                      value={newPerson.birthDay}
                      onChange={e => setNewPerson({...newPerson, birthDay: e.target.value})}
                      required
                    > 
                        <option value="" disabled>-SELECT DAY-</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label>Birth Month</label>
                    <select 
                      type="text"
                      className="form-control"
                      placeholder="Sex Assigned at Birth"
                      value={newPerson.birthMonth}
                      onChange={e => setNewPerson({...newPerson, birthMonth: e.target.value})}
                      required
                    > 
                       <option value="" disabled>-SELECT MONTH-</option>
                       <option value="01">Jan</option>
                        <option value="02">Feb</option>
                        <option value="03">Mar</option>
                        <option value="04">Apr</option>
                        <option value="05">May</option>
                        <option value="06">Jun</option>
                        <option value="07">Jul</option>
                        <option value="08">Aug</option>
                        <option value="09">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label>Birth Year</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Birth Year"
                      value={newPerson.birthYear}
                      onChange={e => setNewPerson({...newPerson, birthYear: e.target.value})}
                      maxLength={4}
                      required
                    /> 
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Martital Status</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Martital Status"
                      name="maritalStatus"
                      value={newPerson.maritalStatus}
                      onChange={e => setNewPerson({...newPerson, maritalStatus: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Citizenship</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Citizenship"
                      name="citizenship"
                      value={newPerson.citizenship}
                      onChange={e => setNewPerson({...newPerson, citizenship: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Address</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      value={newPerson.address}
                      onChange={e => setNewPerson({...newPerson, address: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Phone number</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                      name="phoneNumber"
                      value={newPerson.phoneNumber}
                      onChange={e => setNewPerson({...newPerson, phoneNumber: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Religion</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Religion"
                      name="religion"
                      value={newPerson.religion}
                      onChange={e => setNewPerson({...newPerson, religion: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>No. Children</label>
                    <input 
                      type="number"
                      className="form-control"
                      placeholder="No. Children"
                      name="numberOfChildren"
                      value={newPerson.numberOfChildren}
                      onChange={e => setNewPerson({...newPerson, numberOfChildren: e.target.value})}
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
                      value={newPerson.email}
                      onChange={e => setNewPerson({...newPerson, email: e.target.value})}
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
                      value={newPerson.password}
                      onChange={e => setNewPerson({...newPerson, password: e.target.value})}
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
                      value={newPerson.passwordVerify}
                      onChange={e => setNewPerson({...newPerson, passwordVerify: e.target.value})}
                      required
                    />
                  </div>
                </div>

            </div>

            <hr/>

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h2 className="h5 mb-0 text-gray-800">Education</h2>
            </div>
      
            <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Highest Attained</label>
                    <select 
                      type="text"
                      className="form-control"
                      value={newPerson.highestAttainedEducation}
                      name="highestAttainedEducation"
                      onChange={e => setNewPerson({...newPerson, highestAttainedEducation: e.target.value})}
                      required
                    > 
                      <option value="" disabled>- SELECT HIGHEST ATTAINED -</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="College">College</option>
                      <option value="High School">High School</option>
                      <option value="Elementary">Elementary</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Status</label>
                    <select 
                      type="text"
                      className="form-control"
                      value={newPerson.statusEducation}
                      name="statusEducation"
                      onChange={e => setNewPerson({...newPerson, statusEducation: e.target.value})}
                      required
                    > 
                      <option value="" disabled>- SELECT EDUCATION STATUS -</option>
                      <option value="Drop Out">Drop Out</option>
                      <option value="On Going">On Going</option>
                      <option value="Graduate">Graduate </option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>School</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="School"
                      name="schoolEducation"
                      value={newPerson.schoolEducation}
                      onChange={e => setNewPerson({...newPerson, schoolEducation: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Course</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Course"
                      name="courseEducation"
                      value={newPerson.courseEducation}
                      onChange={e => setNewPerson({...newPerson, courseEducation: e.target.value})}
                      required
                    />
                  </div>
                </div>
              
            </div>

            <hr/>

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h2 className="h5 mb-0 text-gray-800">Medical Details</h2>
            </div>
      
            <div className="row">

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Pregnant:</label>
                    <select 
                      type="text"
                      className="form-control"
                      name="role"
                      value={newPerson.pregnantMedical}
                      onChange={e => setNewPerson({...newPerson, pregnantMedical: e.target.value})}
                      required
                    >
                      <option value="" disabled>- SELECT -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>If yes how many months: (Optional)</label>
                    <input 
                      type="number"
                      className="form-control"
                      name="pregnantMonthsMedical"
                      placeholder="Months Pregnant"
                      value={newPerson.pregnantMonthsMedical}
                      onChange={e => setNewPerson({...newPerson, pregnantMonthsMedical: e.target.value})}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Blood Type:</label>
                    <select 
                      type="text"
                      className="form-control"
                      name="role"
                      value={newPerson.bloodTypeMedical}
                      onChange={e => setNewPerson({...newPerson, bloodTypeMedical: e.target.value})}
                      required
                    >
                      <option value="" disabled>- SELECT BLOOD TYPE -</option>
                      <option value="A+">A+</option>
                      <option value="O+">O+</option>
                      <option value="B+">B+ </option>
                      <option value="AB+">AB+ </option>
                      <option value="A+">A+ </option>
                      <option value="O-">O- </option>
                      <option value="B-">B- </option>
                      <option value="AB-">AB- </option>
                    </select>
                  </div>
                </div>


                <div className="col-md-6">
                  <div className="form-group">
                    <label>With maintenance:</label>
                    <select 
                      type="text"
                      className="form-control"
                      name="role"
                      value={newPerson.withMaintenanceMedical}
                      onChange={e => setNewPerson({...newPerson, withMaintenanceMedical: e.target.value})}
                      required
                    >
                      <option value="" disabled>- SELECT -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>On Going Medication:</label>
                    <select 
                      type="text"
                      className="form-control"
                      name="role"
                      value={newPerson.onGoingMedicationMedical}
                      onChange={e => setNewPerson({...newPerson, onGoingMedicationMedical: e.target.value})}
                      required
                    >
                      <option value="" disabled>- SELECT -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name of Medicine: (Optional)</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Name of Medicine"
                      name="nameOfMedicineMedical"
                      value={newPerson.nameOfMedicineMedical}
                      onChange={e => setNewPerson({...newPerson, nameOfMedicineMedical: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last Hospital Visit/Checkup?</label>
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Last Hospital Visit/Checkup?"
                      name="lastHospitalMedical"
                      value={newPerson.lastHospitalMedical}
                      onChange={e => setNewPerson({...newPerson, lastHospitalMedical: e.target.value})}
                      required
                    />
                  </div>
                </div>

            </div>

            <button type="submit" className="btn btn-primary">Add Person</button>

          </form>
        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default PersonAdd