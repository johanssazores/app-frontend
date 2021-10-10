import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Home = () => {

  return (
    <div className="container">
      <div className="row" style={{marginTop: "10rem"}}>
        <div className="col-md-6" >
          <div className="register-icon"> 
            <i className="fas fa-sign-in-alt"></i>
            <Link to="/login">Login</Link>
          </div>
         
        </div>
        <div className="col-md-6">
          <div className="register-icon">
            <i className="fas fa-user-plus"></i>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home