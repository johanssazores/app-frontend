import React, { useState } from 'react'
import axios from 'axios'
import { setUserSession } from '../utils/Common'

const UserLogin = (props) => {

  const [loading, setLoading] = useState(false)
  const username = useFormInput('')
  const password = useFormInput('')
  const [error, setError] = useState(null)

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/signin`, { username: username.value, password: password.value }).then(response => {
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
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block">
                    <div  
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto"
                    }}>
                       <img style={{width: "200px", marginTop: "50px"}} src="http://cdn.onlinewebfonts.com/svg/img_337531.png" alt="Thesis" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">User Login</h1>
                      </div>
                     
                      <form className="user" action="/users/login" method="POST">
                        <div className="form-group">
                          <input placeholder="Username" type="text"  {...username} className="form-control" required/>
                        </div>
                        <div className="form-group">
                          <input placeholder="Password"type="password" {...password} className="form-control" required/>
                        </div>
                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                        {/* <button className="btn btn-primary btn-user btn-block" type="submit">LOGIN</button> */}
                        <input type="button" className="btn btn-primary btn-user btn-block" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
                      </form>
                      <hr />
                      {/* <div class="text-center">
                          <a class="small" href="/registration">Register Now</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default UserLogin