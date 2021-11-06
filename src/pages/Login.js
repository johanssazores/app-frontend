import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, loginData);
      await getLoggedIn();
      history.push("/admin-dashboard");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="bg-gradient-primary">

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                      </div>
                      <form className="user" onSubmit={login}>
                        <div className="form-group">
                          <input 
                            className="form-control form-control-user" 
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                        </div>
                        <div className="form-group">
                          <input 
                            className="form-control form-control-user"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            />
                        </div>
                        <button className="btn btn-primary btn-user btn-block" type="submit">Log in</button>
                      </form>

                      <hr />
                      {/* <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">Create an Account!</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login