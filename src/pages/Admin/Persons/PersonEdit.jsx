import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const PersonEdit = () => {
  let {id} = useParams();

const [updatePerson, setUpdatePerson] = useState({
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

useEffect(() => {
  async function getPerson() {
    const getDivision = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/division`);
    const personGet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/person/${id}`);
    setUpdatePerson(personGet.data)
    setDivisions(getDivision.data);

    // const dateOfBirthDay = personGet.data.dateOfBirth.substring(0, 2);
    // const dateOfBirthMonth = personGet.data.dateOfBirth.substring(3, 5);
    // const dateOfBirthYear = personGet.data.dateOfBirth.substring(6, 10);
    // console.log(personGet.data.dateOfBirth)
    // console.log(dateOfBirthDay)
    // console.log(dateOfBirthMonth)
    // console.log(dateOfBirthYear)

    setIsLoading(false)
  }
  getPerson();
}, [id]);

  const SubmitAddPerson = async e => {
    e.preventDefault();
    console.log(updatePerson)
    try {
      setIsLoading(true)
      if(updatePerson.password === updatePerson.passwordVerify){
        const savePerson = await axios.request(
          `${process.env.REACT_APP_BACKEND_URL}/person/${id}`,
          {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({
              "division" : updatePerson.division,
              "firstName" : updatePerson.firstName,
              "lastName" : updatePerson.lastName,
              "sex" : updatePerson.sex,
              "dateOfBirth" : `${updatePerson.birthDay}-${updatePerson.birthMonth}-${updatePerson.birthYear}`,
              "address" : updatePerson.address,
              "maritalStatus" : updatePerson.maritalStatus,
              "numberOfChildren" : updatePerson.numberOfChildren,
              "citizenship" : updatePerson.citizenship,
              "religion" : updatePerson.religion,
              "phoneNumber" : updatePerson.phoneNumber, 
              "email" : updatePerson.email,
              "highestAttainedEducation" : updatePerson.highestAttainedEducation,
              "statusEducation" : updatePerson.statusEducation, 
              "schoolEducation" : updatePerson.schoolEducation, 
              "courseEducation" : updatePerson.courseEducation, 
              "pregnantMedical" : updatePerson.pregnantMedical, 
              "pregnantMonthsMedical" : updatePerson.pregnantMonthsMedical, 
              "bloodTypeMedical" : updatePerson.bloodTypeMedical, 
              "withMaintenanceMedical" : updatePerson.withMaintenanceMedical, 
              "onGoingMedicationMedical" : updatePerson.onGoingMedicationMedical, 
              "nameOfMedicineMedical" : updatePerson.nameOfMedicineMedical, 
              "lastHospitalMedical" : updatePerson.lastHospitalMedical,
              "password" : updatePerson.password,
              "passwordVerify" : updatePerson.passwordVerify
            })
          }
        )
        console.log(savePerson.data)
        alert('Person Updated')
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

  const onChangeUpdatePerson = (e) => {  
    e.persist();  
    setUpdatePerson({...updatePerson, [e.target.name]: e.target.value});  
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
                      value={updatePerson.firstName || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.lastName || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.division || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.sex || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.birthDay || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.birthMonth || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.birthYear || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.maritalStatus || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.citizenship || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.address || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.phoneNumber || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.religion || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.numberOfChildren || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.email || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.password || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.passwordVerify || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.highestAttainedEducation || ""}
                      name="highestAttainedEducation"
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.statusEducation || ""}
                      name="statusEducation"
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.schoolEducation || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.courseEducation || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.pregnantMedical || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.pregnantMonthsMedical || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.bloodTypeMedical || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.withMaintenanceMedical || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.onGoingMedicationMedical || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.nameOfMedicineMedical || ""}
                      onChange={onChangeUpdatePerson}
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
                      value={updatePerson.lastHospitalMedical || ""}
                      onChange={onChangeUpdatePerson}
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

export default PersonEdit