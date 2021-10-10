import React from 'react'
import {Link} from 'react-router-dom'
import './register.css'


const Register2 = () => {

  return (
    <div className="container">
      <div className="row" style={{marginTop: "5rem"}}>
        <h2>Registration</h2>
      <form>
        <div className="a-form">
          <div className="row">
            <h3>Personal Information</h3>
            <div className="col-sm-12 col-md-6">
            <label htmlFor="">Name:</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="">Sex Assigned at Birth: </label>
              <select type="text" className="form-control">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>

            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Date Of Birth" />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Address" />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Martital Status" />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="No. Children" />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Citizenship" />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Religion" />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Phone number" />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <h3>Education</h3>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="">Highest Attained:</label>
              <select type="text" className="form-control">
                <option value="">Post Graduate</option>
                <option value="">College</option>
                <option value="">High School</option>
                <option value="">Elementary</option>
              </select>
            </div>
            <div className="col-sm-12 col-md-6">
            <label htmlFor="">Status:</label>
             <select type="text" className="form-control">
                <option value="">Drop Out</option>
                <option value="">On Going</option>
                <option value="">Graduate </option>
              </select>
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="">School</label>
              <input type="text" className="form-control" placeholder="School" />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="">Course</label>
              <input type="text" className="form-control" placeholder="Course" />
            </div>


            <h3>Medical Record</h3>
            <div className="col-sm-12 col-md-6">
            <label>Pregnant?</label>
              <div className="col-sm-12">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                  <label className="form-check-label" for="gridRadios1">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label className="form-check-label" for="gridRadios2">
                  No
                  </label>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
            <label>If yes how many months?</label>
            <input type="text" className="form-control" placeholder="Months" />
            </div>

            <div className="col-sm-12 col-md-6">
              <label htmlFor="">Blood Type:</label>
              <select type="text" className="form-control">
                  <option value="">A+</option>
                  <option value="">O+</option>
                  <option value="">B+ </option>
                  <option value="">AB+ </option>
                  <option value="">A+ </option>
                  <option value="">O- </option>
                  <option value="">B- </option>
                  <option value="">AB- </option>
                </select>
            </div>


            <div className="col-sm-12 col-md-6">
            <label>With maintenance?</label>
              <div className="col-sm-12">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                  <label className="form-check-label" for="gridRadios1">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label className="form-check-label" for="gridRadios2">
                  No
                  </label>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
            <label>On Going Medication?</label>
              <div className="col-sm-12">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                  <label className="form-check-label" for="gridRadios1">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                  <label className="form-check-label" for="gridRadios2">
                  No
                  </label>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Name of Medicine" />
            </div>

            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="Last Hospital Visit/Checkup?" />
            </div>

            <div className="col-sm-12 col-md-12">
                <Link to="/register-2" className="btn btn-primary" href="">Submit</Link>
            </div>


          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register2