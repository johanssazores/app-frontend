import React, { useState } from 'react'
import axios from 'axios'
import { setScannerSession } from '../utils/Common'
import Logo from '../assets/images/logo.png'

const UserLogin = (props) => {

  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/scanner/login`, {
      email: credentials.email,
      password: credentials.password
    }).then(response => {
      setLoading(false);
      setScannerSession(response.data.tokenScanner, response.data.scanner);
      props.history.push('/scanner/dashboard');
    }).catch(error => {
      setLoading(false);
      console.error(error)
      setError(`Wrong Username or Password.`);
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
                    <div className="image-admin-login">
                      <img style={{width: "200px", marginTop: "50px"}} src={Logo} alt="Thesis" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">QR Scanner Login</h1>
                      </div>
                      <form className="user" onSubmit={handleLogin}>

                        <div className="form-group">
                          <input
                            placeholder="Email"
                            type="email"
                            onChange={e => setCredentials({...credentials, email: e.target.value})}
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            placeholder="Password"
                            type="password"
                            onChange={e => setCredentials({...credentials, password: e.target.value})}
                            className="form-control"
                          required/>
                        </div>

                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                        <button className="btn btn-primary btn-user btn-block" type="submit">LOGIN</button>
                      </form>
                    </div>
                    {(loading) ? <div className="exid-spinner" style={{ fontSize: "10em" }}></div> : ""}
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

export default UserLogin