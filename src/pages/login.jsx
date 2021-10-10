import React, { useState } from 'react'
import axios from 'axios'
import { setUserSession } from '../utils/Common'
import './login.css'

const Login = (props) => {

  const [loading, setLoading] = useState(false)
  const username = useFormInput('')
  const password = useFormInput('')
  const [error, setError] = useState(null)

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:5002/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <>
      <div className="container">
        <div className="row" style={{marginTop: "5rem"}}>
          <div className="col-md-6">
            <img width="100%" src="https://149366112.v2.pressablecdn.com/wp-content/uploads/2019/03/shutterstock_1693785667-scaled.jpg" alt="" />
          </div>
          <div className="col-md-6">
            <form>
              <div className="login-icon">
                <i className="fas fa-sign-in-alt"></i>
              </div>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input placeholder="Username" type="text"  {...username} className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input placeholder="Password"type="password" {...password} className="form-control"/>
              </div>
              {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
              <input type="button" className="btn btn-primary" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login