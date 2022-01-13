import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import moment from 'moment'
import District from '../../../data/District.json'
import Select from 'react-select';
import QRCode from 'qrcode.react';

const PersonEdit = () => {

  let {id} = useParams();

  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "my_qr.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  const [updatePerson, setUpdatePerson] = useState({
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

  useEffect(() => {
    async function getPerson() {
      const personGet = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/person/${id}`);
      setUpdatePerson(personGet.data)
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
              "firstName": updatePerson.firstName,
              "lastName": updatePerson.lastName,
              "sex": updatePerson.sex,
              "dateOfBirth": updatePerson.dateOfBirth,
              "district": updatePerson.district,
              "barangay": updatePerson.barangay,
              "streetName": updatePerson.streetName,
              "houseNumber": updatePerson.houseNumber,
              "subdivision": updatePerson.subdivision,
              "maritalStatus": updatePerson.maritalStatus,
              "citizenship": updatePerson.citizenship,
              "phoneNumber": updatePerson.phoneNumber,
              "religion": updatePerson.religion,
              "noOfChildren": updatePerson.noOfChildren,
              "email": updatePerson.email,
              "highestAttainedEducation": updatePerson.highestAttainedEducation,
              "statusEducation": updatePerson.statusEducation,
              "courseEducation": updatePerson.courseEducation,
              "schoolEducation": updatePerson.schoolEducation,
              "bloodType": updatePerson.bloodType,
              "pregnant": updatePerson.pregnant,
              "monthsPregnant": updatePerson.monthsPregnant,
              "withMaintenance": updatePerson.withMaintenance,
              "onGoingMedication":updatePerson.onGoingMedication,
              "nameOfMedicine": updatePerson.nameOfMedicine,
              "oftenCheckUp": updatePerson.oftenCheckUp,
              "lastHospitalVisit": updatePerson.lastHospitalVisit,
              "smoking": updatePerson.smoking,
              "packsPerDay": updatePerson.packsPerDay,
              "drinking": updatePerson.drinking,
              "frequencyDrinking": updatePerson.frequencyDrinking,
              "conditionDisease": updatePerson.conditionDisease,
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

  const dateOfBirth = (date) => {
    const dob = (moment(date).format("DD-MM-YYYY"))
    setUpdatePerson({...updatePerson, dateOfBirth: dob});
  }

  const selectDistrict = (e, value) => {
    setUpdatePerson({...updatePerson, district: value})
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

  const handleChangeBarangay = (e) => {
    setUpdatePerson({...updatePerson, barangay: e.value})
    let barangayF = District.filter(d => d.Barangay === e.value);
    const mapS = barangayF.map(s => ({
      value: s.Address,
      label: s.Address,
    }));
    setStreet(mapS)
    setshowAddress(false)
  };

  const handleChangeAddress = (e) => {
    setUpdatePerson({...updatePerson, streetName: e.value})
  };

  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit Constituents </h1>
        <Link to="/admin/persons" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Back</Link>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div style={{textAlign: "center"}}>
            <QRCode
              id="qrCodeEl"
              size={300}
              value={id}
              onClick={downloadQRCode}
              className="qr-class"
            />
          </div>
        </div>
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
                    <label>Sex Assigned at Birth</label>
                    <select
                      type="text"
                      className="form-control"
                      placeholder="Sex Assigned at Birth"
                      value={updatePerson.sex}
                      onChange={e => {
                        setUpdatePerson({...updatePerson, sex: e.target.value});
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
                      value={updatePerson.dateOfBirth}
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
                      value={updatePerson.maritalStatus}
                      onChange={e => setUpdatePerson({...updatePerson, maritalStatus: e.target.value})}
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
                      value={updatePerson.citizenship}
                      onChange={e => setUpdatePerson({...updatePerson, citizenship: e.target.value})}
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
                      value={updatePerson.phoneNumber}
                      onChange={e => setUpdatePerson({...updatePerson, phoneNumber: e.target.value})}
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
                      value={updatePerson.religion}
                      onChange={e => setUpdatePerson({...updatePerson, religion: e.target.value})}
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
                      value={updatePerson.noOfChildren}
                      onChange={e => setUpdatePerson({...updatePerson, noOfChildren: e.target.value})}
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
                      value={updatePerson.email}
                      onChange={e => setUpdatePerson({...updatePerson, email: e.target.value})}
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
                      value={updatePerson.password}
                      onChange={e => setUpdatePerson({...updatePerson, password: e.target.value})}
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
                      value={updatePerson.passwordVerify}
                      onChange={e => setUpdatePerson({...updatePerson, passwordVerify: e.target.value})}
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
                      value={updatePerson.district}
                      onChange={e => {
                        setUpdatePerson({...updatePerson, district: e.target.value});
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
                      value={updatePerson.houseNumber}
                      onChange={e => setUpdatePerson({...updatePerson, houseNumber: e.target.value})}
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
                      value={updatePerson.subdivision}
                      onChange={e => setUpdatePerson({...updatePerson, subdivision: e.target.value})}
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
                      value={updatePerson.highestAttainedEducation}
                      name="highestAttainedEducation"
                      onChange={e => setUpdatePerson({...updatePerson, highestAttainedEducation: e.target.value})}
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
                      value={updatePerson.statusEducation}
                      name="statusEducation"
                      onChange={e => setUpdatePerson({...updatePerson, statusEducation: e.target.value})}
                      required
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
                      value={updatePerson.schoolEducation}
                      onChange={e => setUpdatePerson({...updatePerson, schoolEducation: e.target.value})}
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
                      value={updatePerson.courseEducation}
                      onChange={e => setUpdatePerson({...updatePerson, courseEducation: e.target.value})}
                      required
                    />
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
                      value={updatePerson.sourceOfIncome}
                      name="sourceOfIncome"
                      onChange={e => setUpdatePerson({...updatePerson, sourceOfIncome: e.target.value})}
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
                      value={updatePerson.estimatedYearlyIncome}
                      name="estimatedYearlyIncome"
                      onChange={e => setUpdatePerson({...updatePerson, estimatedYearlyIncome: e.target.value})}
                      required
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

            <hr/>

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
                      value={updatePerson.bloodType}
                      onChange={e => setUpdatePerson({...updatePerson, bloodType: e.target.value})}
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
                      value={updatePerson.oftenCheckUp}
                      onChange={e => setUpdatePerson({...updatePerson, oftenCheckUp: e.target.value})}
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
                      value={updatePerson.pregnant}
                      onChange={e => {
                        setUpdatePerson({...updatePerson, pregnant: e.target.value});
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
                      value={updatePerson.monthsPregnant}
                      disabled={pregnant}
                      onChange={e => setUpdatePerson({...updatePerson, monthsPregnant: e.target.value})}
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
                      value={updatePerson.smoking}
                      onChange={e => {
                        setUpdatePerson({...updatePerson, smoking: e.target.value});
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
                      value={updatePerson.packsPerDay}
                      onChange={e => setUpdatePerson({...updatePerson, packsPerDay: e.target.value})}
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
                      value={updatePerson.drinking}
                      onChange={e => {
                        setUpdatePerson({...updatePerson, drinking: e.target.value});
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
                      value={updatePerson.frequencyDrinking}
                      onChange={e => setUpdatePerson({...updatePerson, frequencyDrinking: e.target.value})}
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
                      value={updatePerson.onGoingMedication}
                      onChange={e => setUpdatePerson({...updatePerson, onGoingMedication: e.target.value})}
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
                      value={updatePerson.withMaintenance}
                      onChange={e => setUpdatePerson({...updatePerson, withMaintenance: e.target.value})}
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
                      value={updatePerson.nameOfMedicine}
                      onChange={e => setUpdatePerson({...updatePerson, nameOfMedicine: e.target.value})}
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
                      value={updatePerson.lastHospitalVisit}
                      onChange={e => setUpdatePerson({...updatePerson, lastHospitalVisit: e.target.value})}
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
                      value={updatePerson.conditionDisease}
                      onChange={e => setUpdatePerson({...updatePerson, conditionDisease: e.target.value})}
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

export default PersonEdit