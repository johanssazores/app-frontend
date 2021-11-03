import React, { useState } from 'react'
import axios from 'axios'
import { setUserSession } from '../utils/Common'

const Login = (props) => {

  const [login, setLogin] = useState({
    username:"",
    password: ""
  })
  const [error, setError] = useState(null)
  const {REACT_APP_BACKEND_URL} = process.env;
  const appEnv = {backEndUrl: REACT_APP_BACKEND_URL};

  const handleLogin = login => {
    setError(null);
    axios.post(`${appEnv.backEndUrl}/users/signin`, login).then(response => {
      setUserSession(response.data.token, response.data.user)
      props.history.push('/dashboard')
    }).catch(error => {
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.")
    })
  }

  const SubmitHandlerLogin = async e => {
    e.preventDefault();
    handleLogin(login);
  }

  return (
    <>
      <div>
        <form onSubmit={SubmitHandlerLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input 
              name="username"
              placeholder="Username" type="text"
              value={login.username}  
              onChange={e => {
              setLogin({...login, username: e.target.value});}}
              />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              name="password"
              placeholder="Password" 
              type="password"
              value={login.password} 
              onChange={e => {
              setLogin({...login, password: e.target.value});}}
            />
          </div>
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </>
  )
}


export default Login