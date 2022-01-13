import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment'
import District from '../../../data/District.json'
import Select from 'react-select';

const PersonAdd = () => {

const [newPerson, setNewPerson] = useState({
  firstName: "",
  lastName: "",
  sex: "",
  dateOfBirth: "",
  district: "",
  barangay: "",
  streetName: "",
  houseNumber: "",
  subdivision: "",
  maritalStatus: "",
  citizenship: "",
  phoneNumber: "",
  religion: "",
  noOfChildren: "",
  email: "",
  highestAttainedEducation: "",
  statusEducation: "",
  courseEducation: "",
  schoolEducation: "",
  bloodType: "",
  pregnant: "",
  monthsPregnant: "",
  withMaintenance: "",
  onGoingMedication:"",
  nameOfMedicine: "",
  oftenCheckUp: "",
  lastHospitalVisit: "",
  smoking: "",
  packsPerDay: "",
  drinking: "",
  frequencyDrinking: "",
  conditionDisease: "",
  sourceOfIncome: "",
  estimatedYearlyIncome: "",
  yearOfGraduation: "",
  password: "",
  passwordVerify : "",
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

const [female, setFemale] = useState(true)
const [pregnant, setPregnant] = useState(true)
const [smoke, setSmoke] = useState(true)
const [drink, setDrink] = useState(true)
const [yearGraduation, setYearGraduation] = useState(true)
const [educ, setEduc] = useState(false)
const [finance, setFinance] = useState(false)

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
              "firstName": newPerson.firstName,
              "lastName": newPerson.lastName,
              "sex": newPerson.sex,
              "dateOfBirth": newPerson.dateOfBirth,
              "district": newPerson.district,
              "barangay": newPerson.barangay,
              "streetName": newPerson.streetName,
              "houseNumber": newPerson.houseNumber,
              "subdivision": newPerson.subdivision,
              "maritalStatus": newPerson.maritalStatus,
              "citizenship": newPerson.citizenship,
              "phoneNumber": newPerson.phoneNumber,
              "religion": newPerson.religion,
              "noOfChildren": newPerson.noOfChildren,
              "email": newPerson.email,
              "highestAttainedEducation": newPerson.highestAttainedEducation,
              "statusEducation": newPerson.statusEducation,
              "courseEducation": newPerson.courseEducation,
              "schoolEducation": newPerson.schoolEducation,
              "bloodType": newPerson.bloodType,
              "pregnant": newPerson.pregnant,
              "monthsPregnant": newPerson.monthsPregnant,
              "withMaintenance": newPerson.withMaintenance,
              "onGoingMedication":newPerson.onGoingMedication,
              "nameOfMedicine": newPerson.nameOfMedicine,
              "oftenCheckUp": newPerson.oftenCheckUp,
              "lastHospitalVisit": newPerson.lastHospitalVisit,
              "smoking": newPerson.smoking,
              "packsPerDay": newPerson.packsPerDay,
              "drinking": newPerson.drinking,
              "frequencyDrinking": newPerson.frequencyDrinking,
              "conditionDisease": newPerson.conditionDisease,
              "sourceOfIncome": newPerson.sourceOfIncome,
              "estimatedYearlyIncome": newPerson.estimatedYearlyIncome,
              "yearOfGraduation": newPerson.yearOfGraduation,
              "password": newPerson.password,
              "passwordVerify" : newPerson.passwordVerify,
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

  const dateOfBirth = (date) => {
    const dob = (moment(date).format("DD-MM-YYYY"))
    setNewPerson({...newPerson, dateOfBirth: dob});
  }

  const selectDistrict = (e, value) => {
    setNewPerson({...newPerson, district: value})
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

  const selectGender = (e, value) => {
    if(value === 'Female') {
      setFemale(false)
    }
    if(value === 'Male') {
      setFemale(true)
    }
  }

  const selectPregnant = (e, value) => {
    if(value === 'Yes') {
      setPregnant(false)
    }
    if(value === 'No') {
      setPregnant(true)
    }
  }

  const selectSmoking = (e, value) => {
    if(value === 'Yes') {
      setSmoke(false)
    }
    if(value === 'No') {
      setSmoke(true)
    }
  }

  const selectDrinking = (e, value) => {
    if(value === 'Yes') {
      setDrink(false)
    }
    if(value === 'No') {
      setDrink(true)
    }
  }

  const selectYear = (e, value) => {
    if(value === 'On-going') {
      setYearGraduation(false)
    } else {
      setYearGraduation(true)
    }
  }

  const selectEduc = (e, value) => {
    if(value === 'N/A') {
      setEduc(true)
    } else {
      setEduc(false)
    }
  }

  const selectFinance = (e, value) => {
    if(value === 'N/A') {
      setFinance(true)
    } else {
      setFinance(false)
    }
  }

  const handleChangeBarangay = (e) => {
    setNewPerson({...newPerson, barangay: e.value})
    let barangayF = District.filter(d => d.Barangay === e.value);
    const mapS = barangayF.map(s => ({
      value: s.Address,
      label: s.Address,
    }));
    setStreet(mapS)
    setshowAddress(false)
  };

  const handleChangeAddress = (e) => {
    setNewPerson({...newPerson, streetName: e.value})
  };

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add Constituents</h1>
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
                      onChange={e =>
                        setNewPerson({...newPerson, firstName: e.target.value})
                      }
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
                    <label>Sex Assigned at Birth</label>
                    <select
                      type="text"
                      className="form-control"
                      placeholder="Sex Assigned at Birth"
                      value={newPerson.sex}
                      onChange={e => {
                        setNewPerson({...newPerson, sex: e.target.value});
                        selectGender(e, e.target.value);
                      }}
                      required
                    >
                       <option value="" disabled>-SELECT SEX-</option>
                       <option value="Male">Male</option>
                       <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Date Of Birth</label>
                    <Datetime
                      timeFormat={false}
                      dateFormat="DD-MM-YYYY"
                      onChange={dateOfBirth}
                      value={newPerson.dateOfBirth}
                      closeOnSelect={true}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                  <label>Martital Status</label>
                    <select
                      type="text"
                      className="form-control"
                      placeholder="Sex Assigned at Birth"
                      name="maritalStatus"
                      value={newPerson.maritalStatus}
                      onChange={e => setNewPerson({...newPerson, maritalStatus: e.target.value})}
                      required
                    >
                       <option value="" disabled>-SELECT STATUS-</option>
                       <option value="Single">Single</option>
                       <option value="Married">Married</option>
                       <option value="Widowed">Widowed</option>
                       <option value="Separated">Separated</option>
                       <option value="Live-in">Live-in</option>
                    </select>
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
                    <label>Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                      name="phoneNumber"
                      value={newPerson.phoneNumber}
                      onChange={e => setNewPerson({...newPerson, phoneNumber: e.target.value})}
                      pattern="^-?[0-9]\d*\.?\d*$"
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
                      name="noOfChildren,"
                      value={newPerson.noOfChildren}
                      onChange={e => setNewPerson({...newPerson, noOfChildren: e.target.value})}
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

                {/* <div className="col-md-4">
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
                </div> */}

                <div className="col-md-4">
                  <div className="form-group">
                    <label>District</label>
                    <select
                      type="text"
                      className="form-control"
                      placeholder="District"
                      value={newPerson.district}
                      onChange={e => {
                        setNewPerson({...newPerson, district: e.target.value});
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
                      isDisabled={showBarangay}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Street Name</label>
                    <Select
                      onChange={handleChangeAddress}
                      options={street}
                      isSearchable="true"
                      isDisabled={showAddress}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>House Number / Building Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="houseNumber"
                      value={newPerson.houseNumber}
                      onChange={e => setNewPerson({...newPerson, houseNumber: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Subdivision</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subdivision"
                      value={newPerson.subdivision}
                      onChange={e => setNewPerson({...newPerson, subdivision: e.target.value})}
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
                      onChange={e => {
                        setNewPerson({...newPerson, highestAttainedEducation: e.target.value});
                        selectEduc(e, e.target.value);
                      }} 
                      required
                    >
                      <option value="" disabled>- SELECT HIGHEST ATTAINED -</option>
                      <option value="High School">High School</option>
                      <option value="Elementary">Elementary</option>
                      <option value="Vocational">Vocational</option>
                      <option value="College">College</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="N/A">N/A</option>
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
                      onChange={e => {
                        setNewPerson({...newPerson, statusEducation: e.target.value});
                        selectYear(e, e.target.value);
                      }}
                      disabled={educ}
                    >
                      <option value="" disabled>- SELECT EDUCATION STATUS -</option>
                      <option value="Drop-out">Drop Out</option>
                      <option value="On-going">On Going</option>
                      <option value="Graduate">Graduate </option>
                      <option value="On-leave">On leave </option>
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
                      disabled={educ}
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
                      disabled={educ}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label hidden={yearGraduation}>Expected date of graduation</label>
                    <select
                      type="text"
                      className="form-control"
                      value={newPerson.yearOfGraduation}
                      name="yearOfGraduation"
                      onChange={e => setNewPerson({...newPerson, yearOfGraduation: e.target.value})}
                      disabled={yearGraduation}
                      hidden={yearGraduation}
                    >
                      <option value="" disabled>- SELECT -</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </select>
                  </div>
                </div>

            </div>

            <hr/>

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h2 className="h5 mb-0 text-gray-800">Financial Information</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                    <label>Source of Income</label>
                    <select
                      type="text"
                      className="form-control"
                      value={newPerson.sourceOfIncome}
                      name="sourceOfIncome"
                      onChange={e => {
                        setNewPerson({...newPerson, sourceOfIncome: e.target.value});
                        selectFinance(e, e.target.value);
                      }}
                      required
                    >
                      <option value="" disabled>- SELECT SOURCE OF INCOME -</option>
                      <option value="Work">Work</option>
                      <option value="Pension">Pension</option>
                      <option value="Other">Other </option>
                      <option value="N/A">N/A </option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Estimated Yearly Income</label>
                    <select
                      type="text"
                      className="form-control"
                      value={newPerson.estimatedYearlyIncome}
                      name="estimatedYearlyIncome"
                      onChange={e => setNewPerson({...newPerson, estimatedYearlyIncome: e.target.value})}
                      disabled={finance}
                    >
                      <option value="" disabled>- SELECT INCOME -</option>
                      <option value="5,000 - 100,000">5,000 - 100,000</option>
                      <option value="100,001 - 250,000">100,001 - 250,000</option>
                      <option value="250,001 - 450,000">250,001 - 450,000</option>
                      <option value="450,001 - 650,000">450,001 - 650,000</option>
                      <option value="650,001 - 850,000">650,001 - 850,000</option>
                      <option value="850,001 - above">850,001 - above</option>
                    </select>
                  </div>
                </div>

            </div>

            <hr />

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h2 className="h5 mb-0 text-gray-800">Medical Details</h2>
            </div>

            <div className="row">

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Blood Type:</label>
                    <select
                      type="text"
                      className="form-control"
                      name="bloodType"
                      value={newPerson.bloodType}
                      onChange={e => setNewPerson({...newPerson, bloodType: e.target.value})}
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
                    <label>How often do you get a health checkup?  </label>
                    <select
                      type="text"
                      className="form-control"
                      name="oftenCheckUp"
                      value={newPerson.oftenCheckUp}
                      onChange={e => setNewPerson({...newPerson, oftenCheckUp: e.target.value})}
                      required
                    >
                      <option value="" disabled>- SELECT -</option>
                      <option value="Once in 3 months">Once in 3 months</option>
                      <option value="Once in 6 months">Once in 6 months</option>
                      <option value="Once a year">Once a year</option>
                      <option value="Only when needed">Only when needed</option>
                      <option value="Never">Never</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Pregnant:</label>
                    <select
                      type="text"
                      className="form-control"
                      name="pregnant"
                      value={newPerson.pregnant}
                      onChange={e => {
                        setNewPerson({...newPerson, pregnant: e.target.value});
                        selectPregnant(e, e.target.value);
                      }}
                      disabled={female}
                    >
                      <option value="" disabled>- SELECT -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>If yes how many months:</label>
                    <input
                      type="number"
                      className="form-control"
                      name="monthsPregnant"
                      value={newPerson.monthsPregnant}
                      disabled={pregnant}
                      onChange={e => setNewPerson({...newPerson, monthsPregnant: e.target.value})}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Do you Smoke? </label>
                    <select
                      type="text"
                      className="form-control"
                      name="smoking"
                      value={newPerson.smoking}
                      onChange={e => {
                        setNewPerson({...newPerson, smoking: e.target.value});
                        selectSmoking(e, e.target.value);
                      }}
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
                    <label>Packs per day:</label>
                    <input
                      type="number"
                      className="form-control"
                      name="packsPerDay"
                      value={newPerson.packsPerDay}
                      onChange={e => setNewPerson({...newPerson, packsPerDay: e.target.value})}
                      disabled={smoke}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Do you Drink? </label>
                    <select
                      type="text"
                      className="form-control"
                      name="drinking"
                      value={newPerson.drinking}
                      onChange={e => {
                        setNewPerson({...newPerson, drinking: e.target.value});
                        selectDrinking(e, e.target.value);
                      }}
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
                    <label>Frequency:</label>
                    <select
                      type="text"
                      className="form-control"
                      name="frequencyDrinking"
                      value={newPerson.frequencyDrinking}
                      onChange={e => setNewPerson({...newPerson, frequencyDrinking: e.target.value})}
                      disabled={drink}
                    >
                      <option value="" disabled>- SELECT -</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Occasionally">Occasionally</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>On Going Medication:</label>
                    <select
                      type="text"
                      className="form-control"
                      name="onGoingMedication"
                      value={newPerson.onGoingMedication}
                      onChange={e => setNewPerson({...newPerson, onGoingMedication: e.target.value})}
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
                    <label>With maintenance:</label>
                    <select
                      type="text"
                      className="form-control"
                      name="withMaintenance"
                      value={newPerson.withMaintenance}
                      onChange={e => setNewPerson({...newPerson, withMaintenance: e.target.value})}
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
                    <label>Name of Medicine/s:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name of Medicine"
                      name="nameOfMedicine"
                      value={newPerson.nameOfMedicine}
                      onChange={e => setNewPerson({...newPerson, nameOfMedicine: e.target.value})}
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
                      name="lastHospitalVisit"
                      value={newPerson.lastHospitalVisit}
                      onChange={e => setNewPerson({...newPerson, lastHospitalVisit: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Do you have any hereditary conditions/diseases? </label>
                    <select
                      type="text"
                      className="form-control"
                      name="conditionDisease"
                      value={newPerson.conditionDisease}
                      onChange={e => setNewPerson({...newPerson, conditionDisease: e.target.value})}
                      required
                    >
                      <option value="" disabled>- SELECT -</option>
                      <option value="High blood Pressure">High blood Pressure</option>
                      <option value="Diabetes">Diabetes</option>
                      <option value="Asthma">Asthma</option>
                      <option value="Tuberculosis">Tuberculosis</option>
                      <option value="Others">Others</option>
                      <option value="N/A">N/A</option>
                    </select>
                  </div>
                </div>

            </div>

            <button type="submit" className="btn btn-primary">Save</button>

          </form>
        </div>
      </div>
      {(isLoading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
    </div>
  )
}

export default PersonAdd